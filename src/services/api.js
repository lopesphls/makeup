import axios from 'axios';

const api = axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1',
  responseType: 'json',
});

export default api;
