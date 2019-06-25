import { REQUEST_ADD_COMMENT, SET_COMMENTS } from "../actions/ActionTypes";

const initialState = {
  comments: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case REQUEST_ADD_COMMENT:
      const newComment = action.payload;
      const comments = [...state.comments, newComment];
      return {
        comments
      };
    default:
      return state;
  }
};
export default commentReducer;
