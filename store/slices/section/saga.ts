import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  SectionStateActions,
  setArticleRequest,
} from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import SectionService from "@services/SectionService";
import { AxiosResponse } from "axios";

function* getSectionInfos(action: SectionStateActions) {
  console.log("getSectionInfos");
  console.log(setArticleRequest.type);
  try {
    const res: AxiosResponse<IArticle[]> = yield call(
      SectionService.getSections,
      action.payload
    );

    yield put(setArticleRequest(res.data));
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  console.log("sectionSaga");

  yield takeLatest(setArticleRequest.type, getSectionInfos);
}
