import fetcher from './fetcher';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const url = `${API_URL}/products`;
  const response = await fetcher(url);
  return response.json();
};