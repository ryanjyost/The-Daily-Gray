import React, { Component } from 'react'

class Box extends Component {
	constructor(props){
		super(props)
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
	}

	handleMouseEnter(e){
		this.props.handleMouseEnter([this.props.x, this.props.y])
	}

	render(){
		return (
			<div
				className='box'
				style={this.props.boxStyle}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<span style={this.props.spanStyle}>{this.props.num}</span>
			</div>
		)
	}
}

export default Box