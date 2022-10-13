import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle, ISectionState } from "@store/slices/section/types";
import uuid from "react-uuid";

const initialState: ISectionState = {
  sections: [
    {
      uuid: uuid(),
      title: "연예",
      articles: [],
    },
    {
      uuid: uuid(),
      title: "경제",
      articles: [],
    },
    {
      uuid: uuid(),
      title: "스포츠",
      articles: [],
    },
  ],
};

const SectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    createArticle: (state: ISectionState, action: PayloadAction<any>) => {},
    moveArticle: (state: ISectionState, action: PayloadAction<any>) => {},
    setArticle: (state: ISectionState, action: PayloadAction<IArticle[]>) => {
      console.log(action.payload);
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
