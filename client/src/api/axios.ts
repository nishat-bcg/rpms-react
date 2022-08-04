import axios from 'axios';

export default class AxiosHandler {
  static api = axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    headers: {
      Authorization: 'dummy_token',
    },
  });
}
