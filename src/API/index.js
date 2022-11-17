import axios from 'axios';

const API_KEY = 'e9274037413b6dee8ef09c956605fee3';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
  },
});

export { API };
