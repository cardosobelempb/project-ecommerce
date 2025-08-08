import { Product, ProductVariant } from '@prisma/client';

export interface ProductRootProps {
  title: string;
  products: (Product & { variants: ProductVariant[] })[];
}

export interface ProductListRootProps {
  products: (Product & { variants: ProductVariant[] })[];
}

export interface ProductItemRootProps {
  product: (Product & { variants: ProductVariant[] });
}


// interface ProductRootProps {
//   tile: string;
//   products: (typeof prisma.product & {
//     variants: (typeof prisma.productVariant)[];
//   })[];
// }