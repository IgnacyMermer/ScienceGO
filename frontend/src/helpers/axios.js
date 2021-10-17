import axios from 'axios';
import store from '../store/store';
import {signingConstants} from '../store/constants/signingConstants'

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000',
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

axiosInstance.interceptors.request.use((req) => {
    
    const { signing } = store.getState();
    
    if(signing&&signing.token){
        req.headers.Authorization = `Bearer ${signing.token}`;
    }

    return req;

});

axiosInstance.interceptors.response.use((res) => {
   
    return res;
}, (error) => {
   
    console.log(error.response);
   
    const status = error.response ? error.response.status : 500;
    if(status && status === 500){
        localStorage.clear();
        store.dispatch({ type: signingConstants.SIGN_OUT_SUCCESS });
    }

    return Promise.reject(error);

});

export default axiosInstance;