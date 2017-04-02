import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, IndexRoute} from 'react-router-dom'

import MainView from './components/MainView'
import SourceView from './components/SourceView'


class App extends Component {
	render(){
		return (
				<div id="App">
					<Router>
						<div id="main-cont">
							<Route exact={true} path="/sources" component={SourceView}/>
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