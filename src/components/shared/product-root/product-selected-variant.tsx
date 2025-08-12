import Link from "next/link";

import ImageRoot from "../image-root";
import { ProductVariantProps } from "./product-types";

export default function ProductSelectedVariant({
  variants,
  selectedVariantSlug,
}: ProductVariantProps) {
  return (
    <div>
      {variants.map((variant) => {
        return (
          <Link key={variant.id} href={`/product/variant/${variant.slug}`}>
            <ImageRoot
              selected={selectedVariantSlug}
              width="w-24"
              height="h-24"
              src={variant.imageUrl || ""}
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
}
