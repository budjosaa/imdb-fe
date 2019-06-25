import { all, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  GET_MOVIES,
  GET_MOVIE,
  LIKE_MOVIE,
  GET_GENRES,
  GET_COMMENTS,
  CREATE_COMMENT
} from "../actions/ActionTypes";
import { userLogin, userRegister } from "./AuthSagas";
import { moviesGet, movieGet, movieLike, genresGet } from "./MovieSagas";
import { commentsGet, commentCreate } from "./CommentSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(LIKE_MOVIE, movieLike),
    takeLatest(GET_GENRES, genresGet),
    takeLatest(GET_COMMENTS, commentsGet),
    takeLatest(CREATE_COMMENT, commentCreate)
  ]);
}
