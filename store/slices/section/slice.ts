import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, ISectionState } from "@store/slices/section/types";
import uuid from "react-uuid";

const initialState: ISectionState = {
  loading: true,
  sections: [
    {
      uuid: uuid(),
      title: "섹션1",
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
    setArticle: (state: ISectionState, action: PayloadAction<any>) => {
      state.loading = false;
      state.sections = [
        {
          uuid: uuid(),
          title: "연예",
          articles: action.payload.data,
        },
      ];
    },
  },
});

export type SectionStateActions =
  | ReturnType<typeof createArticleRequest>
  | ReturnType<typeof moveArticleRequest>
  | ReturnType<typeof setArticleRequest>;

export const {
  createArticle: createArticleRequest,
  moveArticle: moveArticleRequest,
  setArticle: setArticleRequest,
} = SectionSlice.actions;

const sectionState = SectionSlice.reducer;

export default sectionState;
