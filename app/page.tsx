import Footer from 'components/layout/footer';
import ProductContainer from 'components/product/product-container';
import { getProducts } from '../lib/api/product.api';

export default async function HomePage() {
  const { data } = await getProducts();

  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-8 py-8 text-black md:flex-row dark:text-white">
        <div className="order-last min-h-screen w-full md:order-none">
          <ProductContainer products={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
