import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import React from "react";
import { IPost } from "..";
import { formatText } from "../../../../utils/formatText";
import { PostCardContainer } from "./styles";
import Navbar from "../../../NavBar";

interface IPostCard {
  post: IPost;
}

export function PostCard() {
  // const { created_at, body, title, number } = post;
  // const formattedDate = formatDistanceToNow(new Date(created_at), {
  //   locale: enUS,
  //   addSuffix: true,
  // });
  return (

    <PostCardContainer to={`/`}>
    <a  href="/7">
        <header>
            <h1>Flamingos are red</h1>
            <span>2 months ago</span>
        </header>
            <main>
                <p>![Red flamingo]

                In the waters shallow and wide
                Where the sun meets the horizon's side
                A sight of elegance and grace
                Red flamingos find their place.

                With feathers bright as the setting sun
                And long legs that seem to run
                Through the water with ease
                They wade and swim with gentle breeze.

                Their beaks  curved like a crescent moon
                Sift through the mud for their next spoon
                Of tiny crustaceans and shrimp
                That make up their daily mealtime whim.

                Their beauty  a true wonder to behold
                A symphony of red  pink  and gold
                As they...
                </p>
            </main>
    </a>

    </PostCardContainer>
  );
}