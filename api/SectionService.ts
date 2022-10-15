import { IArticle } from "@store/slices/section/types";
import { AxiosResponse } from "axios";
import useAxios from "@libs/useCustomAxios";

const REQUEST_URL = "https://jsonplaceholder.typicode.com/posts";
const REQUEST_IMAGE_URL = "https://picsum.photos/200";

export default class SectionService {
  static getSections = async (): Promise<AxiosResponse<IArticle[]>> => {
    const axiosInstance = useAxios();
    return await axiosInstance.get(REQUEST_URL);
  };
}
