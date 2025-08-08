import Image from "next/image";

import HeaderRoot from "@/components/shared/header-root";
import HeadingRoot from "@/components/shared/heading-root";
import ProductRoot from "@/components/shared/product-root";
import { prisma } from "@/shared/db/prisma";

export default async function HomePage() {
  const products = await prisma.product?.findMany({
    include: { variants: true },
  });

  // console.log("PRODUCTS =>", products);

  // if (!products) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
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

        <section>
          <ProductRoot title="Marcas parceiras" products={products} />
        </section>

        <section className="px-6">
          <HeadingRoot>Mais vendidas</HeadingRoot>
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
        <section className="px-6">
          <HeadingRoot>Novos produtos</HeadingRoot>
        </section>
      </main>
      <footer className="bg-gray-100 px-6 py-8">
        <HeadingRoot className="text-[12px]">
          © 2025 Copyright BEWEAR
        </HeadingRoot>
        <p className="text-[12px] text-gray-500">
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
