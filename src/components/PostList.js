import React, { Component } from 'react'
import Post from './Post'
import styles from './styles.js'

class PostList extends Component {
	constructor(props){
		super(props)
	}

	render(){

		const currentHoveredBox = this.props.currentHoveredBox;
		const postArray = this.props.postList;
		const searchInput = this.props.searchInput.toLowerCase();

		console.log(searchInput)

		var filteredPostArray = (function(postArray, searchInput){
			//filters related to hovering specific box
			if(currentHoveredBox.length != 0){
				return filteredPostArray = postArray.filter((post) => {
				 return currentHoveredBox[0] == Number(post.xy[0]) &&
							 currentHoveredBox[1] == Number(post.xy[1]);
				})
			}

			if(searchInput.length > 1){
				return filteredPostArray = postArray.filter((post) => {
				 return post['title'].toLowerCase().search(searchInput) > -1 || post['description'].toLowerCase().search(searchInput) > -1 ;
				})
			}

			return postArray

		})(postArray, searchInput);

		const postList = filteredPostArray.map((post, i) => {
			return(
				<li style={styles.post.container}>
					<Post
						title={post.title}
						description={post.description}
						url={post.url}
						xy={post.xy}
						source={post.source}
					/>
				</li>
			)
		})
		return (
			<ul className="postList">
					{postList}
			</ul>
		)
	}
}

export default PostList