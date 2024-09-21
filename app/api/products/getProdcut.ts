import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

async function getProductsFromDatabase() {
  // Mock function to simulate fetching products from a database
  return [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await getProductsFromDatabase();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}