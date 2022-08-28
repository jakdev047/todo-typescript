import { combineReducers } from "redux";
import { postsSlice } from "../commonRedux/posts/slice";
import { localStorageSlice } from "../commonRedux/reduxForLocalStorage/slice";

export const rootReducer = combineReducers({
  localStorage: localStorageSlice?.reducer,
  posts: postsSlice?.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
