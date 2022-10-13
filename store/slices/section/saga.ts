import { call, put, takeLatest } from "@redux-saga/core/effects";
import { setArticleRequest } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const REQUEST_URL = "https://jsonplaceholder.typicode.com/posts";

function* getSectionInfos(action: any) {
  console.log(123);
  try {
    const res: IArticle[] = yield call(axios.get(REQUEST_URL), action.payload);
    yield put(setArticleRequest(res));
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  console.log("takeLatest setSectionsSaga");
  yield takeLatest(setArticleRequest, getSectionInfos);
}
