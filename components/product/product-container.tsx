import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import React from 'react';
import { Product } from '../../types/product/product.api';

interface ProductContainerProps {
  products: Product[];
}
export default function ProductContainer({ products }: ProductContainerProps) {
  return (
    <>
      {products !== null && products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
