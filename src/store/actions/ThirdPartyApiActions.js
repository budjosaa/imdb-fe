import { REQUEST_MOVIES_THIRD_API, MOVIES_THIRD_API } from "./ActionTypes";

export const getThirdApiMovies = payload => {
  return {
    type: REQUEST_MOVIES_THIRD_API,
    payload
  };
};
export const setThirdApiMovies = payload => {
  return {
    type: MOVIES_THIRD_API,
    payload
  };
};
