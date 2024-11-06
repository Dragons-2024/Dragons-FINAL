import axios from 'axios';

export const axiosApi = axios.create({
  baseURL: 'https://dragons-final-api.onrender.com',
  timeout: 5000,
});