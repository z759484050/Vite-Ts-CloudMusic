import { axiosInstance } from "./config";

export const getBannerRequest = <T=any>() => {
    return axiosInstance.get<T>("/banner");
  };