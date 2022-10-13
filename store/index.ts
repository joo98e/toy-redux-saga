import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import sectionState from "@store/slices/section/slice";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { all, fork } from "@redux-saga/core/effects";
import { setSectionsSaga } from "@store/slices/section/saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const sagaMiddleWare = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleWare, logger));
const RootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combined = combineReducers({
        section: sectionState,
      });
      return combined(state, action);
    }
  }
};

function* rootSaga() {
  yield all([fork(setSectionsSaga)]);
}

const store = configureStore({
  reducer: RootReducer,
  enhancers: [enhancer],
});

const createStore = () => {
  return configureStore({
    reducer: RootReducer as Reducer<RootState, AnyAction>,
  });
};

const wrapper = createWrapper(createStore);

sagaMiddleWare.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export default store;
