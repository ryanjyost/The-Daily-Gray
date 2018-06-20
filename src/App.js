import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";

import MainView from "./components/MainView";
//import Sites from "./components/Sites";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Router>
          <div id="main-cont">
            <Route path="/" component={MainView} />
            {/*<Route exact={true} path="/" component={Sites} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
