import HeadingRoot from "../heading-root";
import { ProductList } from "./product-list";
import { ProductRootProps } from "./product-types";

export default function ProductRoot({ title, products }: ProductRootProps) {
  return (
    <div className="space-y-6">
      <div className="px-6">
        <HeadingRoot>{title}</HeadingRoot>
      </div>
      <ProductList products={products} />
    </div>
  );
}
