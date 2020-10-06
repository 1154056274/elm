import axios from 'axios'


const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

instance.interceptors.request.use(function (config) {
  
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance