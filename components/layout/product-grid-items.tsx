import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import Link from 'next/link';
import { Product } from 'interfaces/product'
import { slugify } from 'lib/utils';

interface ProductGridItemsProps {
  products: Product[];
}
export default function ProductGridItems({ products }: ProductGridItemsProps) {
  return (
    <>
      {products.map((product, index) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${slugify(product.title)}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.price.toString(),
                currencyCode: 'USD'
              }}
              src={product.images[0] || ''}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
