import React from "react";
import { Link } from "react-router-dom";

function Postlist(props: any) {
	return (
		<div>
			{props.blogs.data.map((blog: any) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/${blog.id}`}>
						<h2>{blog.title}</h2>
					</Link>
				</div>
			))}
		</div>
	);
}

export default Postlist;