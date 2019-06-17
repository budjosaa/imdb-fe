import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
