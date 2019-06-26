import {
  GET_COMMENTS,
  SET_COMMENTS,
  REQUEST_ADD_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  REQUEST_DELETE_COMMENT
} from "./ActionTypes";

export const getComments = payload => {
  return {
    type: GET_COMMENTS,
    payload
  };
};
export const setComments = payload => {
  return {
    type: SET_COMMENTS,
    payload
  };
};
export const createComment = payload => {
  return {
    type: REQUEST_ADD_COMMENT,
    payload
  };
};
export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};
export const deleteComment = payload => {
  return {
    type: REQUEST_DELETE_COMMENT,
    payload
  };
};
export const removeCommentFromRedux = payload => {
  return {
    type: DELETE_COMMENT,
    payload
  };
};
