import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Postlist from "../Posts/PostList";
import Navbar from "../NavBar";

function Home() {
	const [data, setData] = useState();
	const [err, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get("api/v1/posts/", {
				withCredentials: true,
			})
			.then((res) => {
				if (res.status === 200) {
					setData(res.data);
				} else {
					console.log( "~ file: Home.js ~ line 23 ~ .then ~ res.data", res);
				}
			})
			.catch((e) => {
				setError(e.message);
				console.log("~ file: Home.js ~ line 27 ~ useEffect ~ e", e);
			});

		setLoading(false);
	}, []);

	return (
		<>
			<Navbar className="home" />
			<div className="home">
				{loading && <h2>Loading data...</h2>}
				{err && <div>{err}</div>}
				{data && <Postlist blogs={data} />}
			</div>
		</>
	);
}

export default Home;