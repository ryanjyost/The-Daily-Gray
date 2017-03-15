import React, { Component } from 'react'
import Box from './Box'
import styles from './styles.js'


class MapFilter extends Component {
	constructor(props){
		super(props)
		this.handleMapHover = this.handleMapHover.bind(this);
		this.handleBoxMouseEnter = this.handleBoxMouseEnter.bind(this);
		this.handleBoxMouseLeave = this.handleBoxMouseLeave.bind(this);
		this.state = {
			hover: 'n', // n for no, y for yes
			currentHoveredBox: []
		}
	}

	handleMapHover(){

		let newHover = Object.assign('', this.state.hover)
		let newHoveredBox = Object.assign([], this.state.currentHoveredBox)

		if(newHover[0] == 'n'){
			newHover = 'y'
		} else{
			newHover = 'n'
			newHoveredBox = []
		}

		this.setState(
			{
				hover: newHover,
				currentHoveredBox: newHoveredBox
			}
		)
	}

	handleBoxMouseEnter(coordinateArray){
		let newHoveredBox = Object.assign([], this.state.currentHoveredBox)

		newHoveredBox = coordinateArray;

		this.setState({
			currentHoveredBox: newHoveredBox
		})
	}

	handleBoxMouseLeave(){
		console.log('Skoosh' + coordinates)
	}


	render(){
		var coordinateArray = [[0,0]]

		//get coordinates of a 5x6 grid, with one box on 0th row
		for(let y = 1; y < 6; y++){
			for(let x = 5; x > 0; x--){
				coordinateArray.push([x, y])
			}
		}

		coordinateArray.reverse();

		const boxList = coordinateArray.map((coordinate, i) => {

			let x = coordinate[0],
					y = coordinate[1];

			let opacity = (1-.19*y);
			let boxStyle = styles.box,
					yStyle = styles.box['y'+y],
					xStyle = styles.box['x'+x];

			return (
					<Box
						key={i.toString()}
						num={'x:'+ x + ' y:' + y}
						x={x}
						y={y}
						boxStyle={Object.assign({}, boxStyle, yStyle, xStyle)}
						spanStyle = {styles.box.span}
						handleMouseEnter={this.handleBoxMouseEnter}
						handleMouseLeave={this.handleBoxMouseLeave}
					/>
			)

		})

		return (
			<div
				style={styles.MapFilter}
				onMouseEnter={this.handleMapHover}
				onMouseLeave={this.handleMapHover}
			>
			<pre>{JSON.stringify(this.state, null, 2)}</pre>

				{boxList}
			</div>

		)
	}
}

export default MapFilter