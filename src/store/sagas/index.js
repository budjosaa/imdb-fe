import { all, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  REGISTER,
  GET_MOVIES,
  GET_MOVIE,
  LIKE_MOVIE
} from "../actions/ActionTypes";
import { userLogin, userRegister } from "./AuthSagas";
import { moviesGet, movieGet, movieLike } from "./MovieSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIE, movieGet),
    takeLatest(LIKE_MOVIE, movieLike)
  ]);
}
