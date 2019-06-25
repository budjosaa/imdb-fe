import {
  ADD_COMMENT,
  SET_COMMENTS,
  DELETE_COMMENT
} from "../actions/ActionTypes";

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
      const comments = [...state.comments, newComment];
      return {
        comments
      };
    case DELETE_COMMENT:
      const deletedId = action.payload;
      const newComments = state.comments.filter(
        comment => comment.id !== deletedId
      );
      return {
        comments: newComments
      };
    default:
      return state;
  }
};
export default commentReducer;
