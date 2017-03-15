import React, { Component } from 'react'


class Header extends Component {
	render(){
		return (
			<header id="header">
				<div id="header-inner-container">
					<a id="logo-link" href="/">
						<div id="logo-cont">
							<img id="logo" src="../images/favicon.ico"/>
							<div id="logo-text">
								<h1>Media Bias Map</h1>
								<h6>A travel guide to online politics.</h6>
							</div>
						</div>
					</a>
				</div>
			</header>
		)
	}
}

export default Header