import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { authUser, loginError, registerError } from "../actions/AuthActions";
import AuthService from "../../services/AuthService";

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push("/home/?page=1&elementsPerPage=5"));
  } catch (error) {
    yield put(loginError(true));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push("/login"));
  } catch (error) {
    yield put(registerError(true));
  }
}
