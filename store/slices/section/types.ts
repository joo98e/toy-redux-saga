export interface IArticle {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface ISection {
  uuid: string;
  title: string;
  articles: IArticle[];
}

export interface ISectionState {
  loading: boolean | null;
  amountOfCurrentlyLoadedData: number;
  sections: ISection[];
}

export interface ICreateSectionRequest {
  uuid: string;
  title: string;
}

export interface IGetArticlesRequest {
  data: IArticle[];
  uuid: string;
}

export interface IMoveArticleRequest {
  uuid: string;
  source: {
    droppableId: any;
    index: number;
  };
  destination: {
    droppableId: any;
    index: number;
  };
}
