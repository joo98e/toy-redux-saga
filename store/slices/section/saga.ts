import { call, put, takeLatest } from "@redux-saga/core/effects";
import { setArticleRequest } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const REQUEST_URL = "https://jsonplaceholder.typicode.com/posts";

const fetcher = () => {
  return axios.get(REQUEST_URL);
};

function* getSectionInfos(action: PayloadAction<IArticle[]>) {
  try {
    console.log(2);
    const res: IArticle[] = yield call(fetcher, action.payload);
    yield put(setArticleRequest(res));
    console.log(3);
  } catch (e) {
    console.log(e);
  }
}

export function* setSectionsSaga() {
  yield takeLatest(setArticleRequest, getSectionInfos);
}
