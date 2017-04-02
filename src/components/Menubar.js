import React, { Component } from 'react'
import styles from './styles.js'
import Logo from './Logo.js'
import {Link} from 'react-router-dom'
import superagent from 'superagent'
import update from 'immutability-helper'


class Menubar extends Component {
  constructor(){
    super()
    this.handleTopicClick = this.handleTopicClick.bind(this);
    this.resetTopic = this.resetTopic.bind(this);
    this.state = {
      topicList: []
    }
  }

  componentDidMount(){
    //get topics
    superagent
      .get('/api/topic')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if(err){
          console.log(err)
          return
        }

        let results = response.body.results.reverse();

        this.setState({
          topicList: results
        })

      })
  }

  handleTopicClick(e){
    e.preventDefault()
    const topic = e.currentTarget.textContent

    this.props.updateTopic(topic)
  }

  resetTopic(){
    this.props.updateTopic('')
  }


  render(){

    const topicList = this.state.topicList.map((topic, i) => {
      return (
        <Link
          style={styles.menubar.link}
          to={'/'}
          onClick={this.handleTopicClick}
        >
          {topic.name}
        </Link>
      )
    })

		return (
			<div style={styles.menubar.container}>
        <Logo/>
        <div style={styles.menubar.linksContainer}>
          <Link
            style={styles.menubar.link}
            to={'/'}
            onClick={this.resetTopic}>
              Recent
          </Link>

          {topicList}

        </div>
			</div>
		)
	}
}

export default Menubar