import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./AuthReducer";
import errorReducer from "./ErrorReducer";
import movieReducer from "./MovieReducer";
import commentReducer from "./CommentReducer";
import thirdPartyApiReducer from "./ThirdPartyApiReducer";

export default history =>
  combineReducers({
    authUser: authReducer,
    error: errorReducer,
    movie: movieReducer,
    comment: commentReducer,
    sugestions: thirdPartyApiReducer,
    router: connectRouter(history)
  });
