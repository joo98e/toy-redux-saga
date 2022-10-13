import { call, put, takeLatest } from "@redux-saga/core/effects";
import { setArticleRequest } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import axios from "axios";

const REQUEST_URL = "https://jsonplaceholder.typicode.com/posts";

function* getSectionInfos(action: any) {
  console.log(123);
  try {
    // @ts-ignore
    const res: IArticle[] = yield call(axios.get(REQUEST_URL), action.payload);
    console.log(res);
    yield put(setArticleRequest(res));
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  console.log("takeLatest setSectionsSaga");
  console.log(setArticleRequest);
  yield takeLatest(setArticleRequest, getSectionInfos);
}
