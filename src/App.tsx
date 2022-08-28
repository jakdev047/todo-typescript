import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { RootState } from "./redux/rootReducer";
import PostLanding from "./modules/posts";
import { setAppName } from "./commonRedux/reduxForLocalStorage/slice";

// url
export const APIUrl = "http://localhost:8000";
Axios.defaults.baseURL = APIUrl;

function App() {
  const dispatch = useDispatch();
  const { appName } = useSelector(
    (state: RootState) => state?.localStorage,
    shallowEqual
  );

  return (
    <div className="App">
      <h2>React Typescript {appName}</h2>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(setAppName("Great"));
          }}
        >
          Change
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(setAppName("Todo"));
          }}
        >
          No Change
        </button>
      </div>
      <PostLanding />
    </div>
  );
}

export default App;
