import Link from "next/link";

import { cn } from "@/lib/utils";
import { formatMoney } from "@/shared/helpres/money";

import ImageRoot from "../image-root";
import { ProductItemRootProps } from "./product-types";

export default function ProductItem({
  product,
  classImage,
  width,
  height,
  rounded,
  size,
  classContent,
  ...props
}: ProductItemRootProps) {
  const firstVariant = product.variants[0];
  return (
    <article
      className={cn("", width, height, rounded, size, classContent)}
      {...props}
    >
      <Link className="flex flex-col gap-4" href={`/producs/${product.slug}`}>
        <ImageRoot
          {...classImage}
          src={
            firstVariant?.imageUrl ||
            "https://d4lgxe9bm8juw.cloudfront.net/products/Jaquetas+%26+Moletons/1/74ab7c8c_7c54_4c49_8084_24a87fe0fc85.jpg"
          }
          alt={product.name}
        />

        <div className={cn("flex flex-col gap-1")}>
          <p className="truncate text-sm font-medium">{product.name}</p>
          <p className="text-muted-foreground truncate text-xs font-medium">
            {product.description}
          </p>
          <p className="truncate text-sm font-semibold">
            {formatMoney(firstVariant?.price || 0.0)}
          </p>
        </div>
      </Link>
    </article>
  );
}
