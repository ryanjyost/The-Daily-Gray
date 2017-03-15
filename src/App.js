import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import PostList from './components/PostList'
import MapFilter from './components/MapFilter'
import Search from './components/Search'

class App extends Component {
	constructor(){
		super()
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.state = {
			list: [
				{title: 'title1'},
				{title: 'title2'},
				{title: 'title3'},
				{title: 'title4'},
				{title: 'title5'},
			],
			searchInput: '',
			map: {

			}

		}
	}

	handleSearchChange(searchInput){
		let newSearchInput = Object.assign('', this.state.searchInput)
		newSearchInput = searchInput;

		this.setState({searchInput: newSearchInput})
	}

	render(){
		return (
				<div id="App">

					<Header/>

					<div id="main-cont">

					<pre>
          	{JSON.stringify(this.state, null, 2)}
        	</pre>

						<div className="sidebar">
							<Search
								updateSearch={this.handleSearchChange}
								searchInput = {this.state.searchInput}
							/>
							<MapFilter/>
						</div>

						<div id="postList-container">
							<PostList
								postList={this.state.list}
								searchInput={this.state.search}
							/>
						</div>
					</div>

				</div>

		)
	}
}


ReactDOM.render(<App/>, document.getElementById('root'))