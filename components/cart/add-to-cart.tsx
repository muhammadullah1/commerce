'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { useFormState } from 'react-dom';
import { useCart } from './cart-context';
import { Product } from '../../types/product/product.api';

//remove
// import { MockProduct, MockProductVariant } from '../../mock-data';
// import { MockProductSix, MockProductVariantSix, mockProductSix } from '../../mock-data';

function SubmitButton({ availableForSale, selectedVariantId} : { availableForSale: boolean; selectedVariantId: string | undefined}) {
  const buttonClasses = 'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  console.log(selectedVariantId);
  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const ProductVariant = {
    id: product._id,
     title: product.title,
      availableForSale: true,
       price: product.price
  };

  console.log('------addToCart------', product);
  // const { variants = [], availableForSale } = product || {};
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useFormState(addItem, null);

  // const variant = variants.find((variant: MockProductVariant) =>
  //   variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  // );
  // const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  // const selectedVariantId = variant?.id || defaultVariantId;
  // const actionWithVariant = formAction.bind(null, selectedVariantId);
  // const finalVariant = variants.find((variant) => variant.id === selectedVariantId)!;

  return (
    <form
      action={async () => {
        // addCartItem(finalVariant, product);
        addCartItem(ProductVariant, product);
        // await actionWithVariant();
      }}
    >
      <SubmitButton availableForSale={true} selectedVariantId={product._id} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
