import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState, setPostList } from "../../redux/rootReducer";
import { Post } from "../../commonRedux/posts/type";

export default function PostLanding() {
  const dispatch = useDispatch();

  const { posts } = useSelector(
    (state: RootState) => state?.posts,
    shallowEqual
  );

  const getPostLanding = async () => {
    try {
      const res = await axios.get(`/todos`);
      dispatch(setPostList(res?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostLanding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("rowDto", posts);

  return (
    <div>
      <h2>Todos Landing</h2>
      {posts?.length > 0 &&
        posts?.map((post: Post | null, index: number) => {
          return (
            <div key={index}>
              <button type="button">Incomplete</button>
              {post?.text}
            </div>
          );
        })}
    </div>
  );
}
