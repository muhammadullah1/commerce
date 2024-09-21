"use client";

import { useEffect, useState } from 'react';
import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { Product } from 'interfaces/product'
import axios from 'axios';

async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get('http://localhost:5000/api/products');
  return response.data;
}

export default async function HomePage() {
  const products = await fetchProducts();

  // const [products, setProducts] = useState<Product[] | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/api/products')
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => setError(error.message));
  // }, []);

  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-8 py-8 text-black md:flex-row dark:text-white">
        <div className="order-last min-h-screen w-full md:order-none">
          {products !== null && products.length > 0 ? (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <ProductGridItems products={products} />
            </Grid>
          ) : null}
        </div>
      </div>
      {/* {error && <div className="">{error}</div>} */}
      <Footer />
    </>
  );
}
