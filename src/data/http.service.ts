import axios from 'axios';
import { apiUrl } from '../constants';

const http = axios.create({
  baseURL: apiUrl,
});

export { http };
