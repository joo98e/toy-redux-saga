import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getArticleRequest, getArticleSuccess, SectionStateActions } from "@store/slices/section/slice";
import { IArticle } from "@store/slices/section/types";
import SectionService from "@services/SectionService";
import { AxiosResponse } from "axios";

function* getArticles(action: SectionStateActions) {
  try {
    // @ts-ignore
    const res: AxiosResponse<IArticle[]> = yield call(SectionService.getSections);

    yield put(
      getArticleSuccess({
        uuid: action.payload.uuid,
        data: res.data,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export function* sectionSaga() {
  yield takeLatest(getArticleRequest, getArticles);
}
