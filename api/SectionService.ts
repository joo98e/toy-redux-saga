import useAxios from "../lib/useCustomAxios";
const REQUEST_URL = "https://jsonplaceholder.typicode.com/posts";

export default class SectionService {
  static getSections = async () => {
    const axiosInstance = useAxios();
    return await axiosInstance.get(REQUEST_URL);
  };
}
