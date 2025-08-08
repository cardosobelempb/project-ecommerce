import Image from "next/image";
import Link from "next/link";

import { formatMoney } from "@/shared/helpres/money";

import { ProductItemRootProps } from "./product-types";

export default function ProductItem({ product }: ProductItemRootProps) {
  const firstVariant = product.variants[0];
  return (
    <article className="">
      <Link className="flex flex-col gap-4" href={`/producs/${product.slug}`}>
        <Image
          src={
            firstVariant?.imageUrl ||
            "https://d4lgxe9bm8juw.cloudfront.net/products/Jaquetas+%26+Moletons/1/74ab7c8c_7c54_4c49_8084_24a87fe0fc85.jpg"
          }
          alt={product.name}
          width={200}
          height={200}
          className="rounded-3xl object-cover"
        />
        <div className="flex max-w-[200px] flex-col gap-1">
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
