import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import superagent from 'superagent'


import Header from './components/Header'
import PostList from './components/PostList'
import MapFilter from './components/MapFilter'
import Search from './components/Search'

class App extends Component {
	constructor(){
		super()
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleBoxHover= this.handleBoxHover.bind(this);
		this.handleMapHover= this.handleMapHover.bind(this);
		this.state = {
			postList: [

				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View ewknfkd'wken",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["0","0"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Skoosh Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["1","1"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["2","1"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["3","1"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["4","1"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["5","1"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["1","2"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["2","2"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["3","2"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["4","2"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["5","2"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["1","3"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["2","3"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["3","3"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["4","3"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["5","3"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["1","4"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["2","4"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["3","4"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["4","4"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["5","4"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["1","5"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["2","5"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["3","5"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["4","5"],
				},
				{
					_id:"58c89b97b0be59f42ebaae27",
					url:"https://www.bloomberg.com/view/articles/2017-03-14/bill-ackman-is-done-losing-money-on-valeant",
					source:"Bloomberg View",
					title:"Bill Ackman Is Done Losing Money on Valeant",
					description:"A company that looks like it was designed by activist investors was a disaster for the activist investor.",
					imageURL:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOvwBQK8EJaE/v0/1200x-1.jpg","__v":0,"created_at":"2017-03-15T01:40:39.894Z",
					xy:["5","5"],
				},
			],

			searchInput: '',
			map: {
				hover: false, // n for no, y for yes
				currentHoveredBox: []
			}
		}
	}

	componentDidMount(){
		superagent
			.get('/api/post')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					console.log(err)
					return
				}

				let results = response.body.results.reverse();
				console.log(results)

				this.setState({
					postList: results
				})

			})
	}

	handleSearchChange(searchInput){
		let newSearchInput = Object.assign('', this.state.searchInput)
		newSearchInput = searchInput;

		this.setState({searchInput: newSearchInput})
	}

	handleBoxHover(hoverBoolean, coordinateArray){
		let newHoveredBox = Object.assign([], this.state.map.currentHoveredBox)
		newHoveredBox = coordinateArray;

		this.setState({
			map:{
				hover: true,
				currentHoveredBox: newHoveredBox
			}
		})
	}

	handleMapHover(hoverBoolean, coordinateArray){
		let newHoveredBox = Object.assign([], this.state.map.currentHoveredBox)
		newHoveredBox = coordinateArray;

		this.setState({
			map:{
				hover: hoverBoolean,
				currentHoveredBox: newHoveredBox
			}
		})
	}

	render(){
		return (
				<div id="App">

					<Header/>

					<div id="main-cont">
						<div className="sidebar">
							<Search
								updateSearch={this.handleSearchChange}
								searchInput = {this.state.searchInput}
							/>
							<MapFilter
								updateCurrentHoveredBox={this.handleBoxHover}
								updateMapHover={this.handleMapHover}
								currentHoveredBox = {this.state.map.currentHoveredBox}
							/>
						</div>

							<PostList
								postList={this.state.postList}
								searchInput={this.state.searchInput}
								currentHoveredBox={this.state.map.currentHoveredBox}
							/>

					</div>

				</div>

		)
	}
}


ReactDOM.render(<App/>, document.getElementById('root'))