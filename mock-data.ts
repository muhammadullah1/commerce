// mock card data
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
}

export const mockCart: Promise<Cart> = Promise.resolve({
  id: "cartId123",
  items: [
    {
      id: "item1",
      name: "Product 1",
      quantity: 2,
      price: 29.99,
    },
    {
      id: "item2",
      name: "Product 2",
      quantity: 1,
      price: 49.99,
    },
  ],
  total: 109.97,
});


// mock menu data
export interface Menu {
  title: string;
  path: string;
}

export const mockMenu: Promise<Menu[]> = Promise.resolve([
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
]);

// mock cart data

export const mockCartForModal = {
  totalQuantity: 3,
  lines: [
    {
      merchandise: {
        product: {
          title: "Product 1",
          handle: "product-1",
          featuredImage: {
            url: "https://fdn.gsmarena.com/imgroot/reviews/24/google-pixel-9-pro-xl/lifestyle/-1024w2/gsmarena_023.jpg",
            altText: "Product 1 Image"
          }
        },
        selectedOptions: [
          { name: "Color", value: "Red" },
          { name: "Size", value: "M" }
        ],
        title: "Product 1 Option",
      },
      price: "19.99",
      quantity: 1,
      cost: {
        totalAmount: {
          amount: "19.99",
          currencyCode: "USD"
        }
      }
    },
    {
      merchandise: {
        product: {
          title: "Product 2",
          handle: "product-2",
          featuredImage: {
            url: "https://fdn.gsmarena.com/imgroot/reviews/24/google-pixel-9-pro-xl/lifestyle/-1024w2/gsmarena_023.jpg",
            altText: "Product 2 Image"
          }
        },
        selectedOptions: [
          { name: "Color", value: "Blue" }
        ],
        title: "Product 2 Option",
      },
      price: "29.99",
      quantity: 2,
      cost: {
        totalAmount: {
          amount: "59.98",
          currencyCode: "USD"
        }
      }
    }
  ],
  cost: {
    totalTaxAmount: {
      amount: "5.00",
      currencyCode: "USD"
    },
    totalAmount: {
      amount: "79.97",
      currencyCode: "USD"
    }
  }
};


// mockPageData
export const mockPageData = {
  title: "Sample Page Title",
  body: "<p>This is a sample page body content.</p>",
  bodySummary: "This is a summary of the body content.", // Add this line
  seo: {
    title: "Sample SEO Title",
    description: "Sample SEO Description"
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};


// mock producs fo search results
export const mockProducts = [
  {
    id: '1',
    title: 'Product 1',
    price: '29.99',
    imageUrl: 'https://fdn.gsmarena.com/imgroot/reviews/23/vivo-x100-pro/lifestyle/-1024w2/gsmarena_008.jpg',
  },
  {
    id: '2',
    title: 'Product 2',
    price: '49.99',
    imageUrl: 'https://fdn.gsmarena.com/imgroot/reviews/23/vivo-x100-pro/lifestyle/-1024w2/gsmarena_011.jpg',
  },
  {
    id: '3',
    title: 'Product 3',
    price: '19.99',
    imageUrl: 'https://fdn.gsmarena.com/imgroot/reviews/23/vivo-x100-pro/lifestyle/-1024w2/gsmarena_020.jpg',
  },
  {
    id: '4',
    title: 'Product 4',
    price: '49.99',
    imageUrl: 'https://fdn.gsmarena.com/imgroot/reviews/23/vivo-x100-pro/lifestyle/-1024w2/gsmarena_011.jpg',
  },
  {
    id: '5',
    title: 'Product 5',
    price: '19.99',
    imageUrl: 'https://fdn.gsmarena.com/imgroot/reviews/23/vivo-x100-pro/lifestyle/-1024w2/gsmarena_020.jpg',
  },
];


//mock collection
export const mockCollections = [
  {
    id: '1',
    title: 'Summer Collection',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fresh and bright summer styles',
    path: '/collections/summer' 
  },
  {
    id: '2',
    title: 'Winter Collection',
    imageUrl: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cozy and warm outfits for winter',
    path: '/collections/winter'
  },
  {
    id: '3',
    title: 'Spring Collection',
    imageUrl: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Light and colorful designs for spring',
    path: '/collections/spring'
  },
];


// lib/shopify/types.ts (example definition)
export type Image = {
  url: string;
  altText: string;
};

// Mock data for images
export const mockImages: Image[] = [
  {
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    altText: 'Image 1 description',
  },
  {
    url: 'https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Image 2 description',
  },
  {
    url: 'https://images.pexels.com/photos/4226732/pexels-photo-4226732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Image 3 description',
  },
  {
    url: 'https://images.pexels.com/photos/3373718/pexels-photo-3373718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Image 4 description',
  },
  {
    url: 'https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Image 5 description',
  },
];


// 
// Define the product mock data

interface Product {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  images: { url: string; altText: string }[];
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  seo: {
    title: string;
    description: string;
  };
  tags: string[]; // Explicitly define tags as an array of strings
}

export const mockProductTwo: Product = {
  // Your product data
  id: '1',
  title: 'Sample Product',
  description: 'This is a description of the sample product.',
  featuredImage: {
    url: 'https://images.pexels.com/photos/28145763/pexels-photo-28145763/free-photo-of-a-small-flower-on-a-plate-with-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Sample Product Image',
    width: 600,
    height: 400
  },
  images: [
    {
      url: 'https://images.pexels.com/photos/28079873/pexels-photo-28079873/free-photo-of-a-sign-pointing-to-different-destinations-in-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Sample Image 1'
    },
    {
      url: 'https://images.pexels.com/photos/27180675/pexels-photo-27180675/free-photo-of-perito-moreno-glacier-in-patagonia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Sample Image 2'
    },
    {
      url: 'https://images.pexels.com/photos/20678326/pexels-photo-20678326/free-photo-of-a-boat-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Sample Image 3'
    }
  ],
  availableForSale: true,
  priceRange: {
    minVariantPrice: {
      amount: '19.99',
      currencyCode: 'USD'
    },
    maxVariantPrice: {
      amount: '29.99',
      currencyCode: 'USD'
    }
  },
  seo: {
    title: 'Sample Product SEO Title',
    description: 'This is the SEO description of the sample product.'
  },
  tags: [] // Array of strings
};

// related products mocks
// Define the related products mock data
export const mockRelatedProducts = [
  {
    id: '2',
    handle: 'related-product-1',
    title: 'Related Product 1',
    priceRange: {
      maxVariantPrice: {
        amount: '24.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Related Product 1 Image'
    }
  },
  {
    id: '3',
    handle: 'related-product-2',
    title: 'Related Product 2',
    priceRange: {
      maxVariantPrice: {
        amount: '34.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Related Product 2 Image'
    }
  },
  {
    id: '4',
    handle: 'related-product-3',
    title: 'Related Product 3',
    priceRange: {
      maxVariantPrice: {
        amount: '44.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Related Product 3 Image'
    }
  }
];


// mock products three 
// mock-data.ts

export const mockProductThree = [
  {
    id: '1',
    handle: 'product-one',
    title: 'Product One',
    description: 'Description for Product One.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product One Image',
      width: 600,
      height: 400
    },
    priceRange: {
      maxVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '19.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '2',
    handle: 'product-two',
    title: 'Product Two',
    description: 'Description for Product Two.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Two Image',
      width: 600,
      height: 400
    },
    priceRange: {
      maxVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '3',
    handle: 'product-three',
    title: 'Product Three',
    description: 'Description for Product Three.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Three Image',
      width: 600,
      height: 400
    },
    priceRange: {
      maxVariantPrice: {
        amount: '49.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      }
    }
  }
];

export interface ImageFour {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface PriceRange {
  maxVariantPrice: {
    amount: string;
    currencyCode: string;
  };
  minVariantPrice: {
    amount: string;
    currencyCode: string;
  };
}

export interface ProductFour {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: ImageFour;
  images: ImageFour[];
  priceRange: PriceRange;
}


export const mockProductFour: ProductFour[] = [
  {
    id: '1',
    handle: 'product-one',
    title: 'Product One',
    description: 'Description for Product One.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product One Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '19.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '2',
    handle: 'product-two',
    title: 'Product Two',
    description: 'Description for Product Two.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Two Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '3',
    handle: 'product-three',
    title: 'Product Three',
    description: 'Description for Product Three.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Three Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '49.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '4',
    handle: 'product-four',
    title: 'Product four',
    description: 'Description for Product four.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product One Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/14569229/pexels-photo-14569229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product One Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '19.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '5',
    handle: 'product-5',
    title: 'Product 5',
    description: 'Description for Product 5.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Two Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Two Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      }
    }
  },
  {
    id: '6',
    handle: 'product-6',
    title: 'Product 6',
    description: 'Description for Product 6.',
    featuredImage: {
      url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Product Three Image',
      width: 600,
      height: 400
    },
    images: [
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      },
      {
        url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText: 'Product Three Image',
        width: 600,
        height: 400
      }
    ],
    priceRange: {
      maxVariantPrice: {
        amount: '49.99',
        currencyCode: 'USD'
      },
      minVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      }
    }
  }
];





// home page mock data

export interface ProductFive {
  handle: string;
  featuredImage: {
    url: string;
  };
  title: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export const mockProductFive: ProductFive[] = [
  {
    handle: 'product-1',
    featuredImage: { url: 'https://images.pexels.com/photos/4210339/pexels-photo-4210339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    title: 'Product 1',
    priceRange: { maxVariantPrice: { amount: '50.00', currencyCode: 'USD' } },
  },
  {
    handle: 'product-2',
    featuredImage: { url: 'https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    title: 'Product 2',
    priceRange: { maxVariantPrice: { amount: '75.00', currencyCode: 'USD' } },
  },
  {
    handle: 'product-3',
    featuredImage: { url: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    title: 'Product 3',
    priceRange: { maxVariantPrice: { amount: '100.00', currencyCode: 'USD' } },
  },
];



// product varients
type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

type ProductVariant = {
  id: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
};


// Mock product options
export const mockProductOptions: ProductOption[] = [
  {
    id: 'option-1',
    name: 'Size',
    values: ['Small', 'Medium', 'Large'],
  },
  {
    id: 'option-2',
    name: 'Color',
    values: ['Red', 'Blue', 'Green'],
  },
];

// Mock product variants
export const mockProductVariants: ProductVariant[] = [
  {
    id: 'variant-1',
    availableForSale: true,
    selectedOptions: [
      { name: 'Size', value: 'Small' },
      { name: 'Color', value: 'Red' },
    ],
  },
  {
    id: 'variant-2',
    availableForSale: false,
    selectedOptions: [
      { name: 'Size', value: 'Medium' },
      { name: 'Color', value: 'Blue' },
    ],
  },
  {
    id: 'variant-3',
    availableForSale: true,
    selectedOptions: [
      { name: 'Size', value: 'Large' },
      { name: 'Color', value: 'Green' },
    ],
  },
];


// product deatil mock
// mock-data.ts
export type MockProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type MockProductVariant = {
  id: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
};

export type MockProduct = {
  id: string;
  title: string;
  variants: MockProductVariant[];
  availableForSale: boolean;
};


// mock-data.ts
export interface MockProductVariantSix {
  id: string;
  selectedOptions: { name: string; value: string }[];
  availableForSale: boolean;
}

export interface MockProductSix {
  variants: MockProductVariantSix[];
  availableForSale: boolean;
}

export const mockProductVariantSix: MockProductVariantSix[] = [
  {
    id: '1',
    selectedOptions: [{ name: 'Size', value: 'M' }],
    availableForSale: true,
  },
  {
    id: '2',
    selectedOptions: [{ name: 'Size', value: 'L' }],
    availableForSale: true,
  },
];

export const mockProductSix: MockProductSix = {
  variants: mockProductVariantSix,
  availableForSale: true,
};
