import Image from "next/image";

import CategoryRoot from "@/components/shared/category-root";
import FooterRoot from "@/components/shared/footer-root";
import HeaderRoot from "@/components/shared/header-root";
import HeadingRoot from "@/components/shared/heading-root";
import ProductRoot from "@/components/shared/product-root";
import { prisma } from "@/shared/db/prisma";

export default async function HomePage() {
  const products = await prisma.product?.findMany({
    include: { variants: true },
  });

  const newlyProducts = await prisma.product?.findMany({
    include: { variants: true },
    orderBy: { createdAt: "desc" },
  });

  const categories = await prisma.category.findMany({});

  // console.log("PRODUCTS =>", products);

  // if (!products) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <HeaderRoot />
      <main className="space-y-6">
        <section className="px-6">
          <Image
            src="/banner01.png"
            alt="Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </section>

        <section className="px-6">
          <HeadingRoot>Marcas parceiras</HeadingRoot>
        </section>

        <section className="space-y-6">
          <ProductRoot
            title="Mais vendidas "
            products={products}
            classImage={{
              width: "w-[200px]",
              height: "h-[200px]",
              rounded: "rounded-md",
              size: "w-[200px] h-[200px]",
            }}
            width="w-[200px]"
          />

          <CategoryRoot categories={categories} />
        </section>

        <section className="px-6">
          <Image
            src="/banner02.png"
            alt="Banner"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </section>
        <section className="">
          <ProductRoot
            title="Novos produtos"
            products={newlyProducts}
            classImage={{
              width: "w-[200px]",
              height: "h-[200px]",
              rounded: "rounded-md",
              size: "w-[200px] h-[200px]",
            }}
            width="w-[200px]"
          />
        </section>
      </main>
      <FooterRoot />
    </div>
  );
}
