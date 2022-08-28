import React from "react";
import { Post } from "./../../commonRedux/posts/type";

type postProps = {
  post: Post;
  deletePostHandler: (id: number) => void;
};

export default function SinglePost({
  post: { id, text },
  deletePostHandler,
}: postProps) {
  return (
    <>
      <div>
        <button type="button">Incomplete</button>
        {text}
        <button type="button" onClick={() => deletePostHandler(id)}>
          X
        </button>
        {/* 
              <button type="button">Avg</button>
              <button type="button">Low</button>
              <button type="button">Edit</button>
              <button type="button">Delete</button> */}
      </div>
    </>
  );
}
