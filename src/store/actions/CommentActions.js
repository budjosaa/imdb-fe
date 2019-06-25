import {
  GET_COMMENTS,
  SET_COMMENTS,
  REQUEST_ADD_COMMENT,
  ADD_COMMENT
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
