import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom'

import Menubar from './components/Menubar'
import MainView from './components/MainView'
import Sources from './components/Sources'


class App extends Component {
	render(){
		return (
				<div id="App">
					<Router>
						<div id="main-cont">
							<Menubar/>
							<Route exact={true} path="/sources" component={Sources}/>
							<Route exact={true} path="/" component={MainView}>
								<Route
									path="/"
								/>
							</Route>
						</div>
					</Router>


				</div>

		)
	}
}


ReactDOM.render(<App/>, document.getElementById('root'))