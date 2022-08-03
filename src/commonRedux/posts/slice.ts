import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  },
});
