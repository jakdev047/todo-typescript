import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState } from "../../redux/rootReducer";
import SinglePost from "./single";
import { setPostList, deletePost } from "../../commonRedux/posts/slice";

export default function PostLanding() {
  const dispatch = useDispatch();

  const { posts } = useSelector(
    (state: RootState) => state?.posts,
    shallowEqual
  );

  // get
  const getPostLanding = async () => {
    try {
      const res = await axios.get(`/todos`);
      dispatch(setPostList(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  // delete
  const deletePostHandler = async (id: number) => {
    try {
      const res = await axios.delete(`/todos/${id}`);
      if (res?.data) {
        dispatch(deletePost(id));
        getPostLanding();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostLanding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Todos Landing</h2>
      {posts?.length > 0 &&
        posts?.map((post, index: number) => {
          return (
            <SinglePost
              key={index}
              post={post}
              deletePostHandler={deletePostHandler}
            />
          );
        })}
    </div>
  );
}
