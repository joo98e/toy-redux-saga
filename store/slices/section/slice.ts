import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IArticle,
  ICreateSectionRequest,
  IGetArticlesRequest,
  IMoveArticleRequest,
  ISectionState,
} from "@store/slices/section/types";
import uuid from "react-uuid";
import _ from "lodash";

const initialState: ISectionState = {
  loading: true,
  amountOfCurrentlyLoadedData: 0,
  sections: [
    {
      uuid: uuid(),
      title: "section 1",
      articles: [],
    },
  ],
};

const SectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    createSection: (state: ISectionState, action: PayloadAction<ICreateSectionRequest>) => {
      if (state.sections.length == 3) {
        throw new Error("최대 3개까지만 생성 가능합니다.");
      }
      state.sections = [
        ...state.sections,
        {
          uuid: action.payload.uuid,
          title: action.payload.title,
          articles: [],
        },
      ];
    },
    moveSection: (state: ISectionState, action: PayloadAction<any>) => {},
    moveArticle: (state: ISectionState, action: PayloadAction<IMoveArticleRequest>) => {
      state.sections.find((section, index) => {
        if (section.uuid === action.payload.uuid) {
          const copiedSection: IArticle = _.cloneDeep(state.sections[index].articles[action.payload.source.index]);
          state.sections[index].articles.splice(action.payload.source.index, 1);
          state.sections[index].articles.splice(action.payload.destination.index, 0, copiedSection);
        }
      });
    },
    getArticleRequest: (state, action) => {},
    getArticleSuccess: (state: ISectionState, action: PayloadAction<IGetArticlesRequest>) => {
      state.sections.forEach((section, index) => {
        if (section.uuid === action.payload.uuid) {
          state.sections[index].articles = action.payload.data.slice(
            state.amountOfCurrentlyLoadedData,
            state.amountOfCurrentlyLoadedData + 10
          );
        }
      });

      state.loading = false;
      state.amountOfCurrentlyLoadedData = state.amountOfCurrentlyLoadedData + 10;
    },
  },
});

export type SectionStateActions =
  | ReturnType<typeof createSectionRequest>
  | ReturnType<typeof moveArticleRequest>
  | ReturnType<typeof getArticleRequest>
  | ReturnType<typeof getArticleSuccess>;

export const {
  createSection: createSectionRequest,
  moveArticle: moveArticleRequest,
  getArticleRequest: getArticleRequest,
  getArticleSuccess: getArticleSuccess,
} = SectionSlice.actions;

const sectionState = SectionSlice.reducer;

export default sectionState;
