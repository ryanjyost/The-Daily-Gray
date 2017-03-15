import React, { Component } from 'react'


class Post extends Component {
	render(){
		return (
			<a href="<%= post.url %>" target="_blank" >
			    <div className="post-cont">
				    <span className="image-url">"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i3W1BXtVW.pU/v0/1200x-1.jpg"</span>
				    <span className="hidden-xy">x1y1</span>

				    	<div className="post-img-cont">
				    		<div className="post-info">
				    			<h6 className="category">no category</h6>
				    			<h4>{this.props.title}</h4>
				    			<h5>Description</h5>
				    			<h5 id="source">Source</h5>
				    		</div>
				    	</div>
			    </div>
	  		</a>
		)
	}
}

export default Post