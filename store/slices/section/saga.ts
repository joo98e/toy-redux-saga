import { call, put, takeLatest } from "@redux-saga/core/effects";
import { setArticleRequest } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import SectionService from "../../../api/SectionService";

function* getSectionInfos() {
  console.log("getSectionInfos");
  try {
    const res: IArticle[] = yield call(SectionService.getSections);
    yield put(setArticleRequest(res));
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  console.log("sectionSaga");
  yield takeLatest(setArticleRequest, getSectionInfos);
}
