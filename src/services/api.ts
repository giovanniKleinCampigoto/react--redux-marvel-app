import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
});

api.interceptors.request.use(response => {
  let apiKey = '';

  if (!response.url) return response;

  const splittedResponse = response.url.split('?');

  if (splittedResponse.length > 1) {
    apiKey = '&apikey=d6ad95c6649f832e741c50beb3a500af&limit=12';
  } else {
    apiKey = '?apikey=d6ad95c6649f832e741c50beb3a500af&limit=12';
  }

  response.url += apiKey;
  return response;
});

export default api;
