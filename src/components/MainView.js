import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.js'
import superagent from 'superagent'
import update from 'immutability-helper'

import Sidebar from './Sidebar'
import PostList from './PostList'
import Menubar from './Menubar'

class MainView extends Component {
	constructor(){
		super()
		this.handleTopicChange = this.handleTopicChange.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleBoxHover= this.handleBoxHover.bind(this);
		this.handleMapLeave= this.handleMapLeave.bind(this);
		this.handleBoxClick= this.handleBoxClick.bind(this);
		this.handleFilterReset= this.handleFilterReset.bind(this);
		this.handleHideHelperText= this.handleHideHelperText.bind(this);
		this.handleFilterToggle= this.handleFilterToggle.bind(this);
		this.updateWindowWidth= this.updateWindowWidth.bind(this);
		this.state = {
			postList: [],
			searchInput: '',
			showHelperText: true,
			currentTopic: '',
			map: {
				hover: false,
				currentHoveredBox: [],
				selectedBoxes: []
			},
			sidebarIsOpen: true,
			windowWidth: window.innerWidth,
		}
	}

	//==================================
	// Handle window resizing
	updateWindowWidth(){
		this.setState({
			windowWidth: window.innerWidth
		})
	}

	componentWillMount(){
		this.updateWindowWidth()
	}

	componentWillUnmount(){
		window.removeEventListener("resize", this.updateWindowWidth);
	}


	componentDidMount(){

		//check for window width change
		window.addEventListener("resize", this.updateWindowWidth)

		//get recent posts
		superagent
			.get('/api/post')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					console.log(err)
					return
				}

				let results = response.body.results;

				//most recent
				results.sort((a, b) => {
					return a.created_at < b.created_at ? 1 : -1;
				})

				this.setState({
					postList: results
				})

			})
	}

	//==================================
	// Topic handlers
	handleTopicChange(topic){
		const oldState = this.state;

		const newState = update(oldState, {
			currentTopic: {$set: topic},
		});

		let queryTopic = topic.length > 0 ? {'topic': topic} : null;

		superagent
			.get('/api/post')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					console.log(err)
					return
				}

				let results = response.body.results;

				//most recent
				results.sort((a, b) => {
					return a.created_at < b.created_at ? 1 : -1;
				})

				this.setState({
					postList: results
				})

			})

		this.setState(newState)
	}

	//==================================
	// Menubar handlers
	handleFilterToggle(){
		const oldSidebarIsOpen = this.state.sidebarIsOpen;
		this.setState({sidebarIsOpen: !oldSidebarIsOpen })
	}

	//==================================
	// Map Filter handlers
	handleBoxHover(hoverBoolean, coordinateArray){
		const oldMapState = this.state.map;
		const newMapState = update(oldMapState, {
			hover: {$set: hoverBoolean},
			currentHoveredBox: {$set: coordinateArray}
		});

		this.setState({
			map: newMapState
		})
	}

	handleSearchChange(searchInput){
		let newSearchInput = Object.assign('', this.state.searchInput)
		newSearchInput = searchInput;

		this.setState({searchInput: newSearchInput})
	}

	handleMapLeave(hoverBoolean){
		const oldMapState = this.state.map;
		const newMapState = update(oldMapState, {
			hover: {$set: hoverBoolean},
			currentHoveredBox: {$set: []}
		});

		this.setState({
			map: newMapState
		})
	}

	handleBoxClick(coordinateArray){
		const oldMapState = this.state.map,
					oldSelectedBoxes = this.state.map.selectedBoxes;

		let alreadySelected = false,
				newSelectedBoxes = Object.assign([], oldSelectedBoxes),
				index = null;

		for(let coordinates of oldSelectedBoxes){
			if(coordinates[0] == coordinateArray[0] && coordinates[1] == coordinateArray[1]){
				alreadySelected = true;
				index = newSelectedBoxes.indexOf(coordinates)
			}
		}

		if(alreadySelected){
			const newMapState = update(oldMapState, {
				selectedBoxes: {$splice: [[index, 1]]}
			});

			this.setState({
				map: newMapState
			})
		} else{ // add coordinates to selected boxes
			const newMapState = update(oldMapState, {
				selectedBoxes: {$push: [coordinateArray]}
			});

			this.setState({
				map: newMapState
			})
		}
	}

	handleFilterReset(){
		const oldState = this.state;

		const newState = update(oldState, {
			searchInput: {$set: ''},
			map:{
				selectedBoxes: {$set: []},
			}
		});

		this.setState(newState)
	}

	handleHideHelperText(){
		this.setState({showHelperText: false})
	}

	render(){
		return (
				<div style= {styles.mainView.container}>
					<Menubar
						updateTopic={this.handleTopicChange}
						currentTopic={this.state.currentTopic}
						sidebarIsOpen={this.state.sidebarIsOpen}
						toggleFilter={this.handleFilterToggle}
					/>

						{this.state.sidebarIsOpen &&
							<Sidebar
								showHelperText={this.state.showHelperText}
								mapState={this.state.map}
								hideHelperText={this.handleHideHelperText}
								updateSearch={this.handleSearchChange}
								searchInput = {this.state.searchInput}
								updateCurrentHoveredBox={this.handleBoxHover}
								updateMapHover={this.handleMapLeave}
								updateSelectedBoxes={this.handleBoxClick}
								resetFilter={this.handleFilterReset}
								currentHoveredBox={this.state.map.currentHoveredBox}
								selectedBoxes={this.state.map.selectedBoxes}
							/>
						}

						<PostList
							postList={this.state.postList}
							searchInput={this.state.searchInput}
							currentHoveredBox={this.state.map.currentHoveredBox}
							selectedBoxes={this.state.map.selectedBoxes}
							sidebarIsOpen={this.state.sidebarIsOpen}
						/>

				</div>

		)
	}
}

export default MainView