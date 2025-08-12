import { notFound } from "next/navigation";

import FooterRoot from "@/components/shared/footer-root";
import HeaderRoot from "@/components/shared/header-root";
import HeadingRoot from "@/components/shared/heading-root";
import ImageRoot from "@/components/shared/image-root";
import ProductRoot from "@/components/shared/product-root";
import ProductQuantity from "@/components/shared/product-root/product-quantity";
import ProductSelectedVariant from "@/components/shared/product-root/product-selected-variant";
import { ProductParmsProps } from "@/components/shared/product-root/product-types";
import { Button } from "@/components/ui/button";
import { prisma } from "@/shared/db/prisma";
import { formatMoney } from "@/shared/helpres/money";

export default async function ProductPage({ params }: ProductParmsProps) {
  const { slug } = await params;

  const productVariant = await prisma.productVariant.findFirst({
    where: {
      slug,
    },
    include: { product: { include: { variants: true } } },
  });

  console.log("ProductVariant =>", productVariant);

  if (!productVariant) {
    return notFound();
  }

  const liklyProducts = await prisma.product.findMany({
    where: { categoryId: productVariant.product.categoryId },
    include: { variants: true },
  });

  // if (!product) {
  //   return notFound();
  // }

  return (
    <>
      <HeaderRoot />
      <main className="flex min-h-screen flex-col space-y-6">
        <div className="space-y-3 px-6">
          <ImageRoot
            alt={productVariant.name}
            src={productVariant.imageUrl!}
            height="h-[380px]"
          />

          <ProductSelectedVariant
            selectedVariantSlug={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className={`flex flex-col space-y-4 px-6`}>
          <div className="space-y-0.5">
            <HeadingRoot>{productVariant.product.name}</HeadingRoot>
            <h3 className="text-muted-foreground">{productVariant.name}</h3>
          </div>
          <h3>{formatMoney(productVariant.price)}</h3>
        </div>
        <div className="px-6">
          <ProductQuantity />
        </div>
        <div className="flex flex-col gap-y-3 px-6">
          <Button size={`lg`} className="rounded-full" variant={"outline"}>
            Adicione á sacola
          </Button>
          <Button size={`lg`} className="rounded-full" variant={"default"}>
            Comprar agora
          </Button>
        </div>
        <div className="px-6">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>
        <ProductRoot
          width="w-[200px]"
          products={liklyProducts}
          title="Talvez você goste"
        />
      </main>
      <FooterRoot />
    </>
  );
}
