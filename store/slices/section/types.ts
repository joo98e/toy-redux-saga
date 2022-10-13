export interface IArticle {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface Section {
  uuid: string;
  title: string;
  articles: IArticle[];
}

export interface ISectionState {
  loading: boolean | null;
  sections: Section[];
}
