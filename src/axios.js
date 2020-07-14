import axios from 'axios';

const instance = axios.create({
  baseURL:
    'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=646f8efa509c4548a6ecaa046a6e06c8'
});

export default instance;
