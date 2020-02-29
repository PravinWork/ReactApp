import React, {useState, useEffect} from 'react';
import BlogPost from '../components/blog/Blogpost';

function SingleBlog({ match, location }) {
	
	console.log("API", process.env.REACT_APP_API_URL);
	console.log("Nod", process.env.NODE_ENV);

	const [blogs, setBlogs] = useState([]);
	useEffect(function(){
		fetch(process.env.REACT_APP_API_URL + "/posts/" +match.params.postid)
			.then(res => res.json())
			.then(
				(result) => {
				  setBlogs([result]);
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
			{blogs.map((blog, index) => {
				return( <BlogPost key={"post-"+index} post={blog} type="single" /> )
			})}
		</div>
	)
}
export default SingleBlog;