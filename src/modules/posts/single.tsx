import React from "react";
import { Post } from "./../../commonRedux/posts/type";

type postProps = {
  post: Post;
};

export default function SinglePost({ post }: postProps) {
  return (
    <>
      <div>
        <button type="button">Incomplete</button>
        {post?.text}
        <button type="button">X</button>
        {/* 
              <button type="button">Avg</button>
              <button type="button">Low</button>
              <button type="button">Edit</button>
              <button type="button">Delete</button> */}
      </div>
    </>
  );
}
