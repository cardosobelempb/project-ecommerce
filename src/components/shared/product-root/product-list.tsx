import ProductItem from "./product-item";
import { ProductListRootProps } from "./product-types";

export const ProductList = async ({ products }: ProductListRootProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
