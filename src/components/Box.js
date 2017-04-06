import React, { Component } from 'react'

class Box extends Component {
	constructor(props){
		super(props)
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//tell MapFilter the current hovered box
	handleMouseEnter(e){
		e.preventDefault()
		this.props.handleMouseEnter([this.props.x, this.props.y])
	}

	//add the clicked box's coordinates to selectedBoxes in state
	handleClick(e){
		e.preventDefault()
		this.props.handleClick([this.props.x, this.props.y])
	}

	render(){
		//conditional labelling
		let label = '';

		if(this.props.y == 4){
			const topRowLabels = ['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
			label = topRowLabels[this.props.x];
		}

		if(this.props.y == 0){
			label = 'FAKE NEWS'
		}

		//label for selected box
		for(let coordinate of this.props.selectedBoxes){
			if(this.props.x == coordinate[0] && this.props.y == coordinate[1]){
				label = 'x'
			}
		}

		return (
			<div
				className='box'
				style={this.props.boxStyle}
				onMouseEnter={this.handleMouseEnter}
				onClick={this.handleClick}
			>
				<span className="box-label" style={this.props.boxLabelStyle}>{label}</span>
			</div>
		)
	}
}

export default Box