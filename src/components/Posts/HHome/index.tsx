import React, { useEffect, useState } from "react";

import { PostCard } from "./postCards";
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from "./styles";
import Navbar from "../../NavBar";
import axios from "axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Home_H() {
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
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  // const [postsCounter, setPostsCounter] = useState(0);
  //
  // async function fetchPosts(query = "") {
  //   const response = await api.get(
  //       `search/issues?q=${
  //           query ? query : ""
  //       }%20repo:${"pedr0d1as"}/Github-blog-issues`
  //   );
  //   setPosts(response.data.items);
  //   setPostsCounter(response.data.total_count);
  // }
  //
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
      <>
      <Navbar className="home" />

      <HomeContainer>
        <HomeContent>

          <ListSection>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
			  <PostCard

			  ></PostCard>
          </ListSection>
        </HomeContent>
      </HomeContainer>
      </>
  );
}
export default Home_H;