import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState, setPostList } from "../../redux/rootReducer";

export default function PostLanding() {
  const dispatch = useDispatch();

  const { posts } = useSelector(
    (state: RootState) => state?.posts,
    shallowEqual
  );

  const getPostLanding = async () => {
    try {
      const res = await axios.get(`/posts`);
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

  return <div>Posts Landing</div>;
}
