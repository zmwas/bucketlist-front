import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';


class BucketService {
    constructor() {
        const token = window.localStorage.getItem('token');
        axios.defaults.adapter = httpAdapter;
        axios.defaults.headers['Authorization'] = 'Bearer '+token;

        const service = axios.create({
            baseURL: 'http://bucketlist-goals-api.herokuapp.com',

        });


        service.interceptors.response.use(this.handleSuccess, this.handleError);


        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    post(path, data, callback) {
        const token = window.localStorage.getItem('token');

        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data,
            headers: {Authorization: `Bearer ${token}`},


        }).then(response => callback(response.status, response.data));
    }

    get (path, callback) {
        const token = window.localStorage.getItem('token');

        return this.service.request({
            method: 'GET',
            url: path,
            responseType: 'json',
            headers: {Authorization: `Bearer ${token}`},

        }).then(response => callback(response.status, response.data));
    }

    put(path, data, callback) {
        const token = window.localStorage.getItem('token');

        return this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data,
            headers: {Authorization: `Bearer ${token}`},


        }).then(response => callback(response.status, response.data));
    }

    delete(path, callback) {
        const token = window.localStorage.getItem('token');
        return this.service.request({
            method: 'DELETE',
            url: path,
            responseType: 'json',
            headers: {Authorization: `Bearer ${token}`},
        }).then(response => callback(response.status, response.data));
    }

    search(path, params, callback) {
        const token = window.localStorage.getItem('token');

        return this.service.request({
            method: 'GET',
            url: path,
            params:params,
            responseType: 'json',
            headers: {Authorization: `Bearer ${token}`},
        }).then(response => callback(response.status, response.data));
    }

}

export default new BucketService();
