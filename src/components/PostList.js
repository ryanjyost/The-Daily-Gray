import React, { Component } from 'react'
import Post from './Post'
import styles from './styles.js'

class PostList extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const currentHoveredBox = this.props.currentHoveredBox,
			    selectedBoxes = this.props.selectedBoxes,
			    postArray = this.props.postList,
		      searchInput = this.props.searchInput.toLowerCase();

		var filteredPostArray = (function(postArray, searchInput, selectedBoxesArray){
			//filters related to hovering specific box

			//if there are any selectedBoxes
			if(selectedBoxes.length > 0){
				//filter through the posts
				return filteredPostArray = postArray.filter((post) => {

				 //return true if the post's [x, y] is in the selected boxes array, and macthes search input
				 for(let coordinate of selectedBoxes){
				 		if(coordinate[0] == post.xy[0] && coordinate[1] == post.xy[1] == true){
				 			return true && (post['title'].toLowerCase().search(searchInput) > -1 || post['description'].toLowerCase().search(searchInput) > -1 );
				 		}
				 }
					 return false
				})

			} else{

				if(currentHoveredBox.length != 0){
					return filteredPostArray = postArray.filter((post) => {
					 return currentHoveredBox[0] == Number(post.xy[0]) &&
								 currentHoveredBox[1] == Number(post.xy[1]) &&
								 (post['title'].toLowerCase().search(searchInput) > -1 ||
								 post['description'].toLowerCase().search(searchInput) > -1)
					})
				} else{
					if(searchInput.length > 1){
						return filteredPostArray = postArray.filter((post) => {
						 return post['title'].toLowerCase().search(searchInput) > -1 || post['description'].toLowerCase().search(searchInput) > -1 ;
						})
					}
				}
			}

			return postArray

		})(postArray, searchInput, selectedBoxes);

		const postList = filteredPostArray.map((post, i) => {
			return(
				<li style={styles.post.container}>
					<Post
						title={post.title}
						description={post.description}
						url={post.url}
						xy={post.xy}
						source={post.source}
						imageURL={post.imageURL}
					/>
				</li>
			)
		})
		return (
			<div className="postListContainer">
				<ul className="postList">
						{postList}
				</ul>
			</div>
		)
	}
}

export default PostList