import { Product } from 'types/product';
import { create } from 'zustand';

interface StoreState {
  products: Product[] | null;
  fetchProducts: () => Promise<void>;
  fetchProductDetail: (id: string) => Promise<void>;
  productDetail: Product | null;
}

const useStore = create<StoreState>((set) => ({
  products: null,
  productDetail: null,
  fetchProducts: async () => {
    const response = await fetch('http://localhost:5000/api/products');
    const data = await response.json();
    set({ products: data?.data });
  },
  fetchProductDetail: async (id: string) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    const data = await response.json();
    set({ productDetail: data?.data });
  }
}));

export default useStore;
