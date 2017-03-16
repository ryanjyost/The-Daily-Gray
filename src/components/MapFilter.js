import React, { Component } from 'react'
import Box from './Box'
import styles from './styles.js'


class MapFilter extends Component {
	constructor(props){
		super(props)
		this.handleMapLeave = this.handleMapLeave.bind(this);
		this.handleBoxMouseEnter = this.handleBoxMouseEnter.bind(this);
	}

	handleMapLeave(){
		//pass state up to App
		this.props.updateMapHover(false, [])
	}

	handleBoxMouseEnter(coordinateArray){
		//pass up to App state
		this.props.updateCurrentHoveredBox(true, coordinateArray)
	}

	render(){
		var gridArray = [[0,0]]

		//get coordinates of a 5x6 grid, with one box on 0th row
		for(let y = 1; y < 6; y++){
			for(let x = 5; x > 0; x--){
				gridArray.push([x, y])
			}
		}

			gridArray.reverse();

			// render the grid
			const grid = gridArray.map((coordinate, i) => {

				let x = coordinate[0],
						y = coordinate[1],
						boxStyle = styles.box,
						yStyle = styles.box['y'+y],
						xStyle = styles.box['x'+x];

						if(y == 5){
							xStyle = {opacity: 1, backgroundColor: '#fafafa'}
						}

					return (
							<Box
								key={i.toString()}
								num={'x:'+ x + ' y:' + y}
								x={x}
								y={y}
								boxStyle={Object.assign({}, boxStyle, yStyle, xStyle)}
								boxLabelStyle = {styles.box.label}
								handleMouseEnter={this.handleBoxMouseEnter}
							/>
					)
			}) //end map

		return (
			<div
				style={styles.MapFilter}
				onMouseEnter={this.handleMapEnter}
				onMouseLeave={this.handleMapLeave}
			>
				{grid}
			</div>

		)
	}
}

export default MapFilter