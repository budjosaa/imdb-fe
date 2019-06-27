import { call, put } from "redux-saga/effects";
import { thirdPartyService } from "../../services/ThirdPartyService";
import { setThirdApiMovies } from "../actions/ThirdPartyApiActions";

export function* sugestedMoviesGet({ payload }) {
  try {
    const { data } = yield call(
      thirdPartyService.searchForMovies,
      payload.title
    );
    yield put(setThirdApiMovies(data.results));
  } catch (err) {
    console.log(err);
  }
}
