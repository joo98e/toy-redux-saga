import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sectionReducer from "@store/slices/section/slice";
import createSagaMiddleware from "@redux-saga/core";
import { all, fork } from "@redux-saga/core/effects";
import { sectionSaga } from "@store/slices/section/saga";
import { createWrapper } from "next-redux-wrapper";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  section: sectionReducer,
});

function* rootSaga() {
  yield all([fork(sectionSaga)]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(createStore, {});
