import React, { Component } from 'react'
import styles from './styles.js'


class Logo extends Component {
	render(){
		return (
				<a href="/" id="logo-container">
						<img id="logo-image" src="../images/favicon.ico"/>
						<div id="logo-text-container" >
							<div style={styles.logo.title} >Media Bias Map</div>
							<div className="lato-light" style={styles.logo.tagline}> A travel guide to online politics.</div>
						</div>

				</a>
		)
	}
}

export default Logo