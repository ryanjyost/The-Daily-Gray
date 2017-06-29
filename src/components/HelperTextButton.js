import React, { Component } from 'react'
import styles from './styles.js'

class HelperTextButton extends Component {
	constructor(){
		super()
	}

	render(){

		let header = <a href='/how-it-works' style={styles.HelperText.defaultHeader}>
										Why We Exist
								</a>

		return (
			<h2 style={styles.HelperText.header}>{header}</h2>
		)
	}

}

export default HelperTextButton