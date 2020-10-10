import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
});

api.interceptors.request.use(response => {
  const apiKey = '?apikey=';

  response.url += apiKey;
  return response;
});

export default api;
