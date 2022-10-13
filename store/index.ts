import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import sectionReducer from "@store/slices/section/slice";
import createSagaMiddleware from "@redux-saga/core";
import { all, fork } from "@redux-saga/core/effects";
import { sectionSaga } from "@store/slices/section/saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return combineReducers({
        section: sectionReducer,
      });
    }
  }
};

function* rootSaga() {
  console.log("rootSaga");
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

export type RootState = ReturnType<any>;

export const wrapper = createWrapper(createStore, {});
