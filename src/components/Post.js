import React, { Component } from 'react'
import styles from './styles.js'
import TimeAgo from 'react-timeago'


class Post extends Component {
	constructor(props){
		super(props)
		this.handleImageError = this.handleImageError.bind(this);
		this.state = {
			imageError: false,
		}
	}

	handleImageError(){
		this.setState({imageError: true})
	}

	render(){

		var x = this.props.xy[0],
				y = this.props.xy[1];

		var xLabels = ['', 'Left', 'Left-Center', 'Center', 'Right-Center', 'Right']
		var yLabels = ['FAKE NEWS', 'Speculation', 'Opinion', 'Analysis',
				//top row of labels
				['','News', 'Facts', 'Stats', 'Interview', 'Other' ]
		]

		//set rating label
		var label = 'No rating',
			postTextColor = {};

		if(x == 0){
			label = 'FAKE NEWS'
			postTextColor = styles.post.fakeNewsText
		} else if(y == 4){
			label = yLabels[4][x]
			postTextColor = styles.post.factText
		} else{
			label = xLabels[x] + ' | ' + yLabels[y];
			postTextColor =  styles.post['x'+x]
		}

		return (

				<a target="_blank" href={this.props.url} >
					<div className="postImage" style={{backgroundImage: 'url(' + (this.props.imageURL) +')'}}>
						<div className="postInfo">

							<h6 style={Object.assign({}, styles.post.ratingLabel, postTextColor)}>{label}</h6>

							<div style={styles.post.postTitleAndDescContainer}>
								<h2 style={styles.post.title}>{this.props.title}</h2>
								<h6 style={styles.post.source}>{this.props.source} </h6>
								<h6 style={styles.post.date}><TimeAgo date={this.props.createdAt}/></h6>
							</div>



						</div>
					</div>
				</a>
		)
	}
}

export default Post