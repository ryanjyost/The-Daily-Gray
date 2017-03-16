import React, { Component } from 'react'
import styles from './styles.js'


class Post extends Component {
	render(){

		var x = this.props.xy[0],
			y = this.props.xy[1];


		var xLabels = ['', 'Left', 'Left-Center', 'Center', 'Right-Center', 'Right']
		var yLabels = ['FAKE NEWS', 'Speculation', 'Opinion', 'Commentary', 'Analysis',
				//top row of labels
				['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
		]

		//set rating label
		var label = 'No rating',
			postStyle = {};

		if(x == 0){
			label = 'FAKE NEWS'
			postStyle = Object.assign({}, styles.post.fakeNewsBorder, styles.post)
		} else if(y == 5){
			label = yLabels[5][x]
			postStyle = Object.assign({}, styles.post.factBorder, styles.post)
		} else{
			label = xLabels[x] + ' | ' + yLabels[y];
			postStyle = Object.assign({}, styles.post['x'+x], styles.post)
		}

		return (
				<div style={postStyle}>
					<h2>
						<a href={this.props.url} target="_blank" >
						{this.props.title}</a>
					</h2>
					<p style={styles.post.description}>{this.props.description}</p>
					<h6 className="postSource" style={styles.post.source}>{this.props.source}</h6>
					<h6 style={styles.post.ratingLabel}>{label}</h6>
				</div>
		)
	}
}

export default Post