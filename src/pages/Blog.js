import React, {useState, useEffect} from 'react';
import BlogPost from '../components/blog/Blogpost';

function Blog() {
	
	const [blogs, setBlogs] = useState([]);
	useEffect(function(){
		fetch(process.env.REACT_APP_API_URL + "/posts")
			.then(res => res.json())
			.then(
				(result) => {
				  setBlogs(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				  	console.log("EROOROROROROROR")
				}
			)
	},[]);

	return (
		<div className="home-page">
			<h1>Latest News</h1>
			{blogs.map((blog, index) => {
				return( <BlogPost key={"blog-"+index} post={blog} /> )
			})}
		</div>
	)
}
export default Blog;