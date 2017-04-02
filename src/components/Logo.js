import React, { Component } from 'react'
import styles from './styles.js'


class Logo extends Component {
	render(){
		return (
				<div style={styles.logo.cont}>
						<img style={styles.logo.image} src="../images/favicon.ico"/>
						<div id="logo-text-container" style={styles.logo.textContainer} >
							<div style={styles.logo.title} >Media Bias Map</div>
							<div style={styles.logo.tagline}> A travel guide to online politics.</div>
						</div>

				</div>
		)
	}
}

export default Logo