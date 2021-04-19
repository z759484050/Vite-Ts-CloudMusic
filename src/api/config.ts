import axios from 'axios'


export const baseUrl:string = 'http://106.15.92.199:3000/';

//axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl,
  timeout:1000
});

axiosInstance.interceptors.response.use (
  res => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export {
  axiosInstance
};