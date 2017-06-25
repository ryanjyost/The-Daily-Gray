import React, { Component } from 'react'
import Loader from 'halogen/BounceLoader'
import styles from './styles.js'


class Loading extends Component {
	render(){
		return (
			<div id="loader-container">
			 <Loader id="loader" color="#fff" size="60px" margin="4px"/>
			</div>
		)
	}
}

export default Loading