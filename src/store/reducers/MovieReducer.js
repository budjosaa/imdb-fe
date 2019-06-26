import {
  SET_MOVIES,
  SET_MOVIE,
  SET_NEW_MOVIE,
  SET_GENRES,
  ADD_MOVIE
} from "../actions/ActionTypes";

const initialState = {
  data: [],
  activePage: 0,
  total: 0,
  singleMovie: {},
  per_page: 0,
  genres: []
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        data: action.payload.data,
        activePage: action.payload.current_page,
        total: action.payload.total,
        per_page: action.payload.per_page
      };
    case SET_MOVIE:
      return {
        ...state,
        singleMovie: action.payload
      };
    case SET_NEW_MOVIE:
      const likedMovie = action.payload;
      const newMovies = state.data.map(movie => {
        return movie.id !== likedMovie.id ? movie : likedMovie;
      });
      return {
        ...state,
        data: newMovies,
        singleMovie: likedMovie
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case ADD_MOVIE:
      const movies = [...state.data, action.payload];
      return {
        ...state,
        data: movies
      };
    default:
      return state;
  }
};

export default movieReducer;
