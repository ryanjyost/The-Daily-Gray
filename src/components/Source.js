import React, { Component } from 'react'
import styles from './styles.js'


class Source extends Component {
	constructor(props){
		super(props)

	}

	render(){

		return (

				<div style={styles.sourceMenu.item}>
					<h4>{this.props.name}</h4>
				</div>


		)
	}
}

export default Source