import React, { Component } from 'react'
import Post from './Post'
import Menubar from './Menubar'
import Loading from './Loading'
import update from 'immutability-helper'
import styles from './styles.js'

class PostList extends Component {
	constructor(props){
		super(props);
		this.onImageLoad = this.onImageLoad.bind(this);
		this.state = {
			loading: true,
			loadedPosts: []
		}
	}

	componentDidMount(){
		const numberOfPosts = this.props.postList.length;

		setTimeout(function() {
			this.setState({loading:false});
		}.bind(this), 2000)
	}

	onImageLoad(post){ // thanks Andrew Wong & Hackernoon
		// this.setState(({ loadedPosts }) => {
  //     return { loadedPosts: loadedPosts.concat(post) }
  //   })

  console.log(post);

	}


	render(){
		const currentHoveredBox = this.props.currentHoveredBox,
			    selectedBoxes = this.props.selectedBoxes,
			    postArray = this.props.postList,
		      searchInput = this.props.searchInput.toLowerCase();


		//filter posts with search, map (after the page has already loaded)
		var filteredPostArray = (function(postArray, searchInput, selectedBoxesArray){

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
				<li key={i.toString()} style={styles.post.container}>
					<Post
						title={post.title}
						description={post.description}
						url={post.url}
						xy={post.xy}
						source={post.source}
						imageURL={post.imageURL}
						createdAt={post.created_at}
					/>
				</li>
			)
		})

		//render loading
		if(this.state.loading){
			return <Loading/>
		}

		//render post list
		return (

			<div style={this.props.sidebarIsOpen && window.innerWidth > 949 ? styles.postList.container.sidebarOpen : styles.postList.container.sidebarHidden} className="postListContainer">

				<ul className="postList">
						{postList}
				</ul>

			</div>
		)
	}
}

export default PostList