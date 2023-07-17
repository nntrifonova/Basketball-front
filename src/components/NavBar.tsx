import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props: { className: string}) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [err, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const history = useNavigate();


	interface Navbar {
		className: string
	}

	useEffect(() => {
		setLoading(true);
		axios
			.get("api/v1/users/me", {
				withCredentials: true,
			})
			.then((res) => {
				console.log("~ file: Navbar.js ~ line 17 ~ .then ~ res", res);
				if (res.status !== 200) {
					axios
						.get("api/v1/auth/refresh", {
							withCredentials: true,
						})
						.then((res) => {
							if (res.status !== 200) {
							    console.log(res.status)
							} else {
								setIsLoggedIn(true);
							}
						})
						.catch((e) => {
							setError(e.message);
							console.log("~ file: Navbar.js ~ line 27 ~ .then ~ e", e);
						});
				} else {
					setIsLoggedIn(true);
				}
			})
			.catch((e) => {
				console.log(" ~ file: Navbar.js ~ line 36 ~ useEffect ~ e", e);
			});

		setLoading(false);
	}, [isLoggedIn]);
	const handleLogOut = (e: any) => {
		e.preventDefault();
		axios.get("api/v1/auth/logout", { withCredentials: true }).then((res) => {
			console.log(" ~ file: Navbar.js ~ line 53 ~ axios.get ~ res", res);

			if (res.status === 200) {
				setIsLoggedIn(false);
				history("/");
			} else {
				console.log(" ~ file: Login.js ~ line 19 ~ click ~ res", res);
			}
		});
	};

	return (
		<nav className="navbar">
			<h1>The Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				{!isLoggedIn ? <Link to="/login"> Login </Link> : <></>}
				{!isLoggedIn ? <Link to="/register">Sign Up</Link> : <></>}
				<Link to="/Create">New Blog</Link>
			</div>
			<div className="blog-details" style={{ marginLeft: "40px" }}>
				{isLoggedIn ? <button onClick={handleLogOut}>log out</button> : <></>}
			</div>
		</nav>
	);
}

export default Navbar;