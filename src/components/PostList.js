import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {
	constructor(props){
		super(props)

	}

	render(){
		const postList = this.props.postList.map((post, i) => {
			return(
				<li className="post-item"><Post title={post.title}/></li>
			)
		})
		return (
			<ul id="postList">
					{postList}
			</ul>
		)
	}
}

export default PostList