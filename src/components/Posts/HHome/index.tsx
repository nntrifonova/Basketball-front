import React, { useEffect, useState } from "react";

import { PostCard } from "./postCards";
import {
  HomeContainer,
  HomeContent,
  ListSection,
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

	const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://127.0.0.1:8080/main/posts');
                setPosts(response.data);
            }
            catch (err: any) {
                console.error(err.message);
            }
        }
        fetchPosts();
    }, []);



  return (
      <>
      <Navbar className="home" />

      <HomeContainer>
        <HomeContent>

          <ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.number}`}
                post={post}
              ></PostCard>
            ))}
          </ListSection>
        </HomeContent>
      </HomeContainer>
      </>
  );
}
export default Home_H;