import React, { Component } from 'react'


class Sidebar extends Component {
	render(){
		return(
			<div className="sidebar">
				<Search/>
				<MapFilter/>
			</div>
		)
	}
}

export default Sidebar