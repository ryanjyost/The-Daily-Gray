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
					placeholder={'Type here & click things to explore...'}
					onChange = {this.handleChange}
					value={this.searchInput}
				/>
			</div>
		)
	}
}

export default Search