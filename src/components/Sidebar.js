import React, { Component } from 'react'
import styles from './styles.js'
import MapFilter from './MapFilter'
import Search from './Search'
import HelperText from './HelperText'


class Sidebar extends Component {
	constructor(props){
		super(props)
		this.handleMapLeave = this.handleMapLeave.bind(this);
		this.handleBoxHover = this.handleBoxHover.bind(this);
		this.handleBoxClick = this.handleBoxClick.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleHideHelperText = this.handleHideHelperText.bind(this);
	}

	handleBoxHover(coordinateArray){
		this.props.updateCurrentHoveredBox(true, coordinateArray)
	}

	handleMapLeave(boolean){
		this.props.updateMapHover(false)
	}

	handleBoxClick(coordinateArray){
		this.props.updateSelectedBoxes(coordinateArray)
	}

	handleSearchChange(event){
		this.props.updateSearch(event)
	}

	handleFilterReset(){
		this.props.resetFilter();
	}

	handleHideHelperText(){
		this.props.hideHelperText();
	}

	render(){
		return (

				<div style={styles.sidebar.container} className="sidebar">

					<Search
						updateSearch={this.handleSearchChange}
						searchInput = {this.props.searchInput}
					/>
					<MapFilter
						updateCurrentHoveredBox={this.handleBoxHover}
						updateMapHover={this.handleMapLeave}
						updateSelectedBoxes={this.handleBoxClick}
						resetFilter={this.handleFilterReset}
						currentHoveredBox={this.props.currentHoveredBox}
						selectedBoxes={this.props.selectedBoxes}
					/>

					{this.props.showHelperText && window.innerWidth > 949 ?
						<HelperText
							mapState={this.props.mapState}
							hideHelperText={this.handleHideHelperText}
						/>
						: null
					}

				</div>


		)
	}
}

export default Sidebar