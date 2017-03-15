import React, { Component } from 'react'


class Search extends Component {
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.updateSearch(e.target.value)
	}

	render(){
		return (
			<div>
				<input
					name="searchInput"
					id="search-input"
					placeholder={this.props.searchInput.length > 0 ? this.props.searchInput : 'Search...'}
					onChange = {this.handleChange}
				/>
			</div>
		)
	}
}

export default Search