import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "./type";

const initState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initState,
  reducers: {
    setPostList: (state, { payload }: PayloadAction<[]>) => {
      state.posts = payload;
    },
    deletePost: (state, { payload }: PayloadAction<number>) => {
      state.posts.filter((post: Post) => post.id !== payload);
    },
  },
});

export const { setPostList, deletePost } = postsSlice.actions;
