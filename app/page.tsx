import Footer from 'components/layout/footer';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';

//remove it
import { mockProducts } from '../mock-data';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const products = mockProducts;
  return (
    <>
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
      <Footer />
    </>
  );
}
