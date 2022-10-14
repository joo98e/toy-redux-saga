import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, ISectionState } from "@store/slices/section/types";
import uuid from "react-uuid";

const initialState: ISectionState = {
  loading: true,
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
    createArticle: (state: ISectionState, action: PayloadAction<boolean>) => {},
    moveArticle: (state: ISectionState, action: PayloadAction<any>) => {},
    getArticleRequest: () => {},
    getArticleSuccess: (
      state: ISectionState,
      action: PayloadAction<IArticle[]>
    ) => {
      state.loading = false;
      state.sections = [
        {
          uuid: state.sections[0].uuid,
          title: state.sections[0].title,
          articles: action.payload,
        },
      ];
    },
  },
});

export type SectionStateActions =
  | ReturnType<typeof createArticleRequest>
  | ReturnType<typeof moveArticleRequest>
  | ReturnType<typeof getArticleRequest>
  | ReturnType<typeof getArticleSuccess>;

export const {
  createArticle: createArticleRequest,
  moveArticle: moveArticleRequest,
  getArticleRequest: getArticleRequest,
  getArticleSuccess: getArticleSuccess,
} = SectionSlice.actions;

const sectionState = SectionSlice.reducer;

export default sectionState;
