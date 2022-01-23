import axios from 'axios';
import store from '../../store/store';


const axiosInstance = axios.create({

    baseURL: 'https://api.themoviedb.org/3/'



});
axiosInstance.interceptors.request.use(
    function (config) {
      
      console.log(config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosInstance.interceptors.response.use(
    function (response) {
      //related response
      

  
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;


