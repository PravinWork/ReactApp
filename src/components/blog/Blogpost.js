import React from 'react';
import renderHTML from 'react-render-html';
//import Link from 'react-dom';

const BlogPost = (props) => {
	//console.log(props.key);
	return(
		<article id={"blog-" + props.post.id}>
			<header>
				{(props.type) ?
					<h1><a href={"/blog/" + props.post.id}> {props.post.title.rendered} </a></h1>
					: <h2><a href={"/blog/" + props.post.id}> {props.post.title.rendered} </a></h2>
				}
			</header>
			
			{(props.type) ?
			<div className="content">{ renderHTML( props.post.content.rendered ) }</div>
			:
			<div className="content">{ renderHTML( props.post.excerpt.rendered ) }</div> }

			<footer>
				<div className="posted-on">{props.post.date}</div>
			</footer>
		</article>
	);
}
export default BlogPost;