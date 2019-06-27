import { MOVIES_THIRD_API } from "../actions/ActionTypes";

const initialState = {
  sugestedMovies: []
};
const thirdPartyApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_THIRD_API:
      return {
        sugestedMovies: action.payload
      };
    default:
      return state;
  }
};
export default thirdPartyApiReducer;
