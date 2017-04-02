import React, { Component } from 'react'
import styles from './styles.js'
import superagent from 'superagent'
import update from 'immutability-helper'
import Source from './Source.js'
import iFrame from 'react-iframe'
import Slider from 'react-slick'
import Menubar from './Menubar'


const LeftArrow = () => {
	return (
		<h1>left</h1>
	)
}

class SourceView extends Component {
	constructor(){
		super()
		this.state = {
			sourceList: []
		}
	}

	componentDidMount(){
		//get recent sources
		superagent
			.get('/api/source')
			.query(null)
			.set('Accept', 'application/json')
			.end((err, response) => {
				if(err){
					console.log(err)
					return
				}

				let results = response.body.results.reverse();
				console.log(results)

				this.setState({
					sourceList: results
				})

			})
	}

	render(){

		var sourceArray = this.state.sourceList;

		const sourceList = sourceArray.map((source, i) => {
			return(
					<Source
						name={source.name}
					/>
			)
		})

		const sliderSettings = {
			accessibillity:true,
			arrows:true,
			dots:true,
			slidesToShow: 4,
			slidesToScroll: 1,
		};


		return (
			<div style= {styles.sources.container}>
				<Menubar/>
				<Slider {...sliderSettings} style={styles.sourceMenu.slider}>
					<Source name="test"/>
					<Source name="test"/>
					<Source name="test"/>
					<Source name="test"/>
					<Source name="test"/>
					<Source name="test"/>
				</Slider>
				<div className="iframeContainer">
					<div className="iframe-overlay"></div>
					<iFrame className="iframe" scrolling="no" src="http://www.cnn.com/"/>
				</div>

			</div>
		)
	}
}

export default SourceView