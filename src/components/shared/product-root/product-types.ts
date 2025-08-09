import { Product, ProductVariant } from '@prisma/client';

import { ImageRootProps } from '../image-root/image-types';

export interface ProductContentProps {
  classContent?: string
  width?: string // classes Tailwind, ex: 'w-full' ou 'w-1/2'
  height?: string // classes Tailwind, ex: 'h-64' ou 'h-[300px]'
  size?: string        // Ex: 'w-10 h-10' ou 'w-16 h-16'
  rounded?: string     // Ex: 'rounded-full', 'rounded-md', etc
}
export interface ProductRootProps extends Partial<ProductContentProps>{
  title: string;
  classImage?: Partial<ImageRootProps>;
  products: (Product & { variants: ProductVariant[] })[];
}

export interface ProductListRootProps extends Partial<ProductContentProps>{
 
  classImage?: Partial<ImageRootProps>;
  products: (Product & { variants: ProductVariant[] })[];
}


export interface ProductItemRootProps extends Partial<ProductContentProps> {
  classImage?: Partial<ImageRootProps>;
  product: (Product & { variants: ProductVariant[] });
}


// interface ProductRootProps {
//   tile: string;
//   products: (typeof prisma.product & {
//     variants: (typeof prisma.productVariant)[];
//   })[];
// }