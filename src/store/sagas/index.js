import { all, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  GET_MOVIES,
  GET_MOVIE,
  LIKE_MOVIE,
  GET_GENRES,
  GET_COMMENTS,
  REQUEST_ADD_COMMENT,
  REQUEST_DELETE_COMMENT,
  REQUEST_ADD_MOVIE,
  REQUEST_MOVIES_THIRD_API
} from "../actions/ActionTypes";
import { userLogin, userRegister } from "./AuthSagas";
import {
  moviesGet,
  movieGet,
  movieLike,
  genresGet,
  movieCreate
} from "./MovieSagas";
import { commentsGet, commentCreate, commentDelete } from "./CommentSagas";
import { sugestedMoviesGet } from "./ThirdPartyApiSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(LIKE_MOVIE, movieLike),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(GET_COMMENTS, commentsGet),
    takeLatest(REQUEST_ADD_COMMENT, commentCreate),
    takeLatest(REQUEST_DELETE_COMMENT, commentDelete),
    takeLatest(REQUEST_ADD_MOVIE, movieCreate),
    takeLatest(REQUEST_MOVIES_THIRD_API, sugestedMoviesGet)
  ]);
}
