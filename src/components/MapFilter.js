import React, { Component } from 'react'
import Box from './Box'
import styles from './styles.js'


class MapFilter extends Component {
	constructor(props){
		super(props)
		this.handleMapLeave = this.handleMapLeave.bind(this);
		this.handleBoxMouseEnter = this.handleBoxMouseEnter.bind(this);
		this.handleBoxClick = this.handleBoxClick.bind(this);
		this.handleFilterReset = this.handleFilterReset.bind(this);
	}

	handleMapLeave(e){
		//pass state up to App
		e.preventDefault()
		this.props.updateMapHover(false)
	}

	handleBoxMouseEnter(coordinateArray){
		//pass up to App state
		this.props.updateCurrentHoveredBox(true, coordinateArray)
	}

	handleBoxClick(coordinateArray){
		//pass up to App state
		this.props.updateSelectedBoxes(coordinateArray)
	}

	handleFilterReset(e){
		//pass up to App state
		e.preventDefault()
		this.props.resetFilter();
	}

	render(){
		var gridArray = [[0,0]]

		//get coordinates of a 5x6 grid, with one box on 0th row
		for(let y = 1; y < 5; y++){
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
						xStyle = styles.box['x'+x],
						hoverStyle = {},
						boxLabelStyle = styles.box.label;

						//styling for top row
						if(y == 4){
							xStyle = styles.box.label.top
						}

						//fake news label
						if(y == 0){
							boxLabelStyle = styles.box.label.fakeNews
						}

						//hover styling
						if(this.props.currentHoveredBox[0] == coordinate[0] &&
							 this.props.currentHoveredBox[1] == coordinate[1]){
							hoverStyle = styles.box.hover
						}

					return (
							<Box
								key={i.toString()}
								num={'x:'+ x + ' y:' + y}
								x={x}
								y={y}
								selectedBoxes={this.props.selectedBoxes}
								boxStyle={Object.assign({}, boxStyle, yStyle, xStyle, hoverStyle)}
								boxLabelStyle = {boxLabelStyle}
								handleMouseEnter={this.handleBoxMouseEnter}
								handleClick={this.handleBoxClick}
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
				<div
					style={styles.MapFilter.resetButton}
					className="hoverText"
					onClick={this.handleFilterReset}
				>
				Reset Filter
				</div>
			</div>

		)
	}
}

export default MapFilter