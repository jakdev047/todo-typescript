import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageState } from "./type";

const initState: LocalStorageState = {
  appName: "ToDo",
};

export const localStorageSlice = createSlice({
  name: "localStorage",
  initialState: initState,
  reducers: {
    setAppName: (state, { payload }: PayloadAction<string>) => {
      state.appName = payload;
    },
  },
});

export const { setAppName } = localStorageSlice.actions;
