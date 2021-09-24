import axiosClient from './axiosClient';

const usersApi =  {
    getAll : (params) => {
    const url = '';
    return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/${id}`;
        return axiosClient.get(url);
    },
    } 

    export default usersApi

// class usersApi {
//     getAll = (params) => {
//     const url = '';
//     return axiosClient.get(url, { params });
//     };
//     }
//     // const usersApi = new usersApi();
//     export default usersApi;