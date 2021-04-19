import { axiosInstance } from "./config";

export const getBannerRequest = <T=any>() => {
    return axiosInstance.get<T>("/banner");
  };

  export const getRecommendListRequest = <T=any>() => {
    return axiosInstance.get<T>("/personalized");
  };
  