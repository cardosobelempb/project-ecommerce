import { notFound } from "next/navigation";

import { CategoryParmsProps } from "@/components/shared/category-root/category-types";
import HeaderRoot from "@/components/shared/header-root";
import HeadingRoot from "@/components/shared/heading-root";
import ProductItem from "@/components/shared/product-root/product-item";
import { prisma } from "@/shared/db/prisma";

export default async function CategoryPage({ params }: CategoryParmsProps) {
  const { slug } = await params;

  const category = await prisma.category.findFirst({
    where: {
      slug,
    },
  });

  if (!category) {
    return notFound();
  }

  const products = await prisma.product.findMany({
    where: {
      categoryId: category.id,
    },
    include: { variants: true },
  });

  return (
    <>
      <HeaderRoot />
      <main className="flex w-full flex-col items-center justify-center">
        <section className="flex w-full flex-col space-y-6 px-6">
          <HeadingRoot>{category.name}</HeadingRoot>
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                classImage={{
                  width: "w-full",
                  height: "h-[300px]",
                }}
                width="max-w-full"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
