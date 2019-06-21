import {
  GET_MOVIES,
  SET_MOVIES,
  SET_MOVIE,
  GET_MOVIE,
  LIKE_MOVIE,
  SET_NEW_MOVIE,
  GET_GENRES,
  SET_GENRES
} from "./ActionTypes";

export const getMovies = payload => {
  return {
    type: GET_MOVIES,
    payload
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  };
};
export const getMovie = payload => {
  return {
    type: GET_MOVIE,
    payload
  };
};
export const likeMovie = payload => {
  return {
    type: LIKE_MOVIE,
    payload
  };
};
export const setNewMovies = payload => {
  return {
    type: SET_NEW_MOVIE,
    payload
  };
};
export const getGenres = payload => {
  return {
    type: GET_GENRES,
    payload
  };
};
export const setGenres = payload => {
  return {
    type: SET_GENRES,
    payload
  };
};
