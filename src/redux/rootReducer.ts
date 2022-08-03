import { combineReducers } from "redux";
import { postsSlice } from "../commonRedux/posts/slice";
import { localStorageSlice } from "../commonRedux/reduxForLocalStorage/slice";

export const rootReducer = combineReducers({
  localStorage: localStorageSlice?.reducer,
  posts: postsSlice?.reducer,
});

// localStorage
export const { setAppName } = localStorageSlice.actions;

// posts
export const { setPostList } = postsSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;
