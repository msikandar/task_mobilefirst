import axios from 'axios';
import { toast } from 'react-toastify';
import store from '../store/store';
const envAPI = process.env.API_URL

export const useProtectedHttpRequest = () => {
    let authstate = store.getState();
    const protectedHttpRequest = axios.create({
        baseURL: envAPI,
        headers: { 'Content-Type': 'application/json' },
    });
    // Add a request interceptor
    protectedHttpRequest.interceptors.request.use(
        function (config) {
            // Do something before request is sent
            config.headers['Authorization'] = `Bearer ${authstate?.authentication?.loginData?.token}`;
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    protectedHttpRequest.interceptors.response.use(
        (response) => {
            return response;
        },
        (err) => {
            console.log(err, 'err');
            return new Promise(function (resolve, reject) {
                if (err.response && err.response.status === 403) {
                    toast.error(err.response.data.error);
                    return false;
                    //}
                } else if (err.response && err.response.status === 404) {
                    toast.error('Invalid Endpoint. Try again');
                    return false;
                } else if (err.response && err.response.status === 500) {
                    toast.error('Internal Server Error');
                    return false;
                } else if (err.response && err.response.status === 503) {
                    toast.error('Service Unavailable');
                    return false;
                } else if (err.response && err.response.status === 401) {
                    return false;
                } else if ((typeof err === 'object' || typeof err === 'function') && err !== null) {
                    if (!err.response) {
                        //   toast.error(err);
                        return false;
                    }
                }

                throw err;
            });
        }
    );

    return protectedHttpRequest;
};
