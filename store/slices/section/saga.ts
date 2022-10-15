import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getArticleRequest, getArticleSuccess, SectionStateActions } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import SectionService from "@services/SectionService";
import { AxiosResponse } from "axios";

function* getSectionInfos(action: SectionStateActions) {
  try {
    // @ts-ignore
    const res: AxiosResponse<IArticle[]> = yield call(SectionService.getSections, action.payload);

    yield put(getArticleSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  yield takeLatest(getArticleRequest.type, getSectionInfos);
}
