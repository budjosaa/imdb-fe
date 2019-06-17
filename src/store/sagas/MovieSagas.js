import { call, put } from "redux-saga/effects";
import { movieService } from "../../services/MovieService";
import { setMovies, setMovie } from "../actions/MovieActions";

export function* moviesGet({ payload }) {
  try {
    const { data } = yield call(
      movieService.getMovies,
      payload.pageNumber,
      payload.elementsPerPage
    );

    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
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
