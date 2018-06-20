import React, { Component } from "react";
import superagent from "superagent";

export default class Sites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    //get recent posts
    superagent
      .get("/records")
      .query(null)
      .set("Accept", "application/json")
      .end((err, response) => {
        if (err) {
          console.log(err);
          return;
        }

        //let results = response.body.results;
        console.log("superagent", response.body);
        const screenshots = response.body.screenshots;
        this.setState({ screenshots });
      });
  }

  render() {
    return (
      <div style={{ overflow: "auto", height: "100vh" }}>
        <h1>test</h1>
        {this.state.screenshots.map(screenshot => {
          return <img src={screenshot.url} width="500" height="400" />;
        })}
      </div>
    );
  }
}
