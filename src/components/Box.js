import React, { Component } from 'react'
import styles from './styles.js'

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
		let label = '',
				moreLabelStyle={};

		if(this.props.y == 4){
			const topRowLabels = ['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
			label = topRowLabels[this.props.x];
		}

		if(this.props.y == 0){
			label = 'FAKE NEWS'
		}

		if(this.props.x == 1 && this.props.y == 1){
			label = 'Left'
			moreLabelStyle= styles.box.label.left
		}

		if(this.props.x == 5 && this.props.y == 1){
			label = 'Right'
			moreLabelStyle= styles.box.label.right
		}

		//label for selected box
		for(let coordinate of this.props.selectedBoxes){
			if(this.props.x == coordinate[0] && this.props.y == coordinate[1]){
				label = '-'
				moreLabelStyle = {backgroundColor: '#fff', color:"#000"}
			}
		}

		return (
			<div
				className='box'
				style={this.props.boxStyle}
				onMouseEnter={this.handleMouseEnter}
				onClick={this.handleClick}
			>
				<span className="box-label" style={Object.assign({}, this.props.boxLabelStyle, moreLabelStyle)}>{label}</span>
			</div>
		)
	}
}

export default Box