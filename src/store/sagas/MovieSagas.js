import { call, put } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import {
  setMovies,
  setMovie,
  setNewMovies,
  setGenres,
  addMovie
} from "../actions/MovieActions";

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(
      movieService.getMovies,
      payload.pageNumber,
      payload.elementsPerPage,
      payload.title,
      payload.genre
    );
    yield put(setMovies(data));
  } catch (error) {
    console.log({ error });
  }
}
export function* movieGet({ payload }) {
  try {
    const { data } = yield call(movieService.getMovie, payload.id);
    yield put(setMovie(data));
  } catch (error) {
    console.log(error);
  }
}
export function* movieLike({ payload }) {
  try {
    const { data } = yield call(
      movieService.likeMovie,
      payload.movieId,
      payload.reaction
    );
    yield put(setNewMovies(data));
  } catch (error) {
    console.log(error);
  }
}
export function* genresGet({ payload }) {
  try {
    const { data } = yield call(movieService.getGenres);
    yield put(setGenres(data));
  } catch (err) {
    console.log(err);
  }
}
export function* movieCreate({ payload }) {
  try {
    const { data } = yield call(movieService.createMovie, payload);
    yield put(addMovie(data));
  } catch (err) {
    console.log(err);
  }
}
