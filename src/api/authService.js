import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';


class AuthService {
    constructor() {
    axios.defaults.adapter = httpAdapter;

    let service = axios.create();


    service.interceptors.response.use(this.handleSuccess, this.handleError);

    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }


  post(path, user, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: user,

    }).then(response=> callback(response.status, response.data));
  }

  login(path, user, callback) {
    let credentials = window.btoa(`${user.email  }:${  user.password}`);
    let BasicAuth = `Basic ${  credentials}`;

    return this.service.request({
      headers: {
        'Authorization': BasicAuth,
        'content-type': 'application/json',
      },
      method: 'POST',
      url: path,
      responseType: 'json',
    }).then(response=> callback(response.status, response.data,

    ));
  }
}


export default new AuthService();
