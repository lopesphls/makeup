import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1',
  responseType: 'json',
});

export default Api;
