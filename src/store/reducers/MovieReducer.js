import { SET_MOVIES, SET_MOVIE } from "../actions/ActionTypes";

const initialState = {
  data: [],
  activePage: 0,
  total: 0,
  singleMovie: {},
  per_page: 0
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
    default:
      return state;
  }
};

export default movieReducer;
