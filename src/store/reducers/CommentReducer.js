import { ADD_COMMENT, SET_COMMENTS } from "../actions/ActionTypes";

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
    case ADD_COMMENT:
      const newComment = action.payload;
      const newComennts = state.comments.push(newComment);
      return {
        ...state,
        comment: newComennts
      };
    default:
      return state;
  }
};
export default commentReducer;
