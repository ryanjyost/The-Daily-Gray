import React, { Component } from 'react'
import styles from './styles.js'
import Logo from './Logo.js'
import {Link} from 'react-router-dom'


class Menubar extends Component {
	render(){
		return (
			<div style={styles.menubar.container}>
        <Logo/>
        <div style={styles.menubar.linksContainer}>
          <Link style={styles.menubar.link} to={'/sources'}>Sources</Link>
          <Link style={styles.menubar.link} to={'/'}>Recent</Link>
        </div>
			</div>
		)
	}
}

export default Menubar