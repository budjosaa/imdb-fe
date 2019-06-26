import { call, put } from "redux-saga/effects";
import { commentsService } from "../../services/CommentsService";
import {
  setComments,
  addComment,
  removeCommentFromRedux
} from "../actions/CommentActions";

export function* commentsGet({ payload }) {
  try {
    const { data } = yield call(commentsService.getComments, payload.movieId);
    yield put(setComments(data));
  } catch (err) {
    console.log(err);
  }
}
export function* commentCreate({ payload }) {
  try {
    const { data } = yield call(
      commentsService.createComment,
      payload.content,
      payload.movieId
    );
    yield put(addComment(data));
  } catch (err) {
    console.log(err);
  }
}
export function* commentDelete({ payload }) {
  try {
    const { data } = yield call(commentsService.deleteComment, payload.movieId);
    yield put(removeCommentFromRedux(data.id));
  } catch (err) {
    console.log(err);
  }
}
