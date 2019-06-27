import { MOVIES_THIRD_API, CLEAR_SUGGESTIONS } from "../actions/ActionTypes";

const initialState = {
  suggestedMovies: []
};
const thirdPartyApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_THIRD_API:
      return {
        suggestedMovies: action.payload
      };
    case CLEAR_SUGGESTIONS:
      return {
        suggestedMovies: []
      };
    default:
      return state;
  }
};
export default thirdPartyApiReducer;
