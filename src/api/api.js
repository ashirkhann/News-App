import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const ALGOLIA_BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchStoriesByType = async (type) => {
  const response = await axios.get(`${BASE_URL}/${type}.json`);
  return response.data;
};

export const fetchStory = async (id) => {
  const response = await axios.get(`${BASE_URL}/item/${id}.json`);
  return response.data;
};

export const fetchStoriesByQuery = async (query) => {
  const response = await axios.get(`${ALGOLIA_BASE_URL}/search?query=${query}`);
  return response.data.hits.map(hit => hit.objectID);
};
