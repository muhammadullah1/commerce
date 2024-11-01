import fetcher from './fetcher';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const url = `${API_URL}/products`;
  const response = await fetcher(url);
  return response.json();
};

export const getProduct = async (id: string) => {
  const url = `${API_URL}/products/${id}`;
  const response = await fetcher(url);
  return response.json();
};

export const getRelatedProducts = async (id: string) => {
  const url = `${API_URL}/products/relatedproducts${id}`;
  const response = await fetcher(url);
  return response.json();
};