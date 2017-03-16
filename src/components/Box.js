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

		//conditional labelling
		let label = '';

		if(this.props.y == 5 ){
			const topRowLabels = ['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
			label = topRowLabels[this.props.x];
		}

		if(this.props.y == 0){
			label = 'FAKE NEWS'
		}


		return (
			<div
				className='box'
				style={this.props.boxStyle}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<span style={this.props.boxLabelStyle}>{label}</span>
			</div>
		)
	}
}

export default Box