import { faker } from '@faker-js/faker';

import { PrismaClient } from '@/generated/prisma'; // ✅ use o client padrão

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Limpando tabelas...");
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log("👤 Criando usuários...");
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@example.com",
        password: "hashed_password_1",
        gender: "FEMALE",
        role: "ADMIN",
      },
      {
        name: "Bob",
        email: "bob@example.com",
        password: "hashed_password_2",
        gender: "MALE",
        role: "CLIENT",
      },
    ],
  });

  console.log("📁 Criando categorias...");
  const categories = await Promise.all(
    Array.from({ length: 5 }).map(async () => {
      const name = faker.commerce.department();
      return prisma.category.create({
        data: {
          name,
          slug: faker.helpers.slugify(name.toLowerCase()),
          description: faker.commerce.productDescription(),
          image: faker.image.urlPicsumPhotos(),
        },
      });
    })
  );

  console.log("🎨 Criando variantes com produtos...");
  // Criando 3 variantes com seus respectivos produtos
  for (let i = 0; i < 3; i++) {
    const variantName = faker.commerce.productAdjective() + ' Variant';
    await prisma.productVariant.create({
      data: {
        name: variantName,
        slug: faker.helpers.slugify(variantName.toLowerCase()) + '-' + i,
        description: faker.commerce.productDescription(),
        price: faker.number.int({ min: 1000, max: 10000 }),
        color: faker.color.human(),
        stock: faker.number.int({ min: 10, max: 100 }),
        imageUrl: faker.image.urlPicsumPhotos(),
        product: {
          create: {
            name: faker.commerce.productName(),
            slug: faker.helpers.slugify(faker.commerce.productName().toLowerCase()) + '-' + i,
            description: faker.commerce.productDescription(),
            status: 'CONFIRMED',
            category: {
              connect: {
                id: categories[i % categories.length].id,
              },
            },
          },
        },
      },
    });
  }

  console.log("📦 Criando 10 produtos com 1 variante cada...");
  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    await prisma.product.create({
      data: {
        name,
        slug: faker.helpers.slugify(name.toLowerCase()) + '-' + i,
        description: faker.commerce.productDescription(),
        status: 'PENDING',
        category: {
          connect: {
            id: categories[i % categories.length].id,
          },
        },
        variants: {
          create: [
            {
              name: faker.commerce.productAdjective() + ' Variant',
              slug: faker.helpers.slugify(faker.commerce.productAdjective().toLowerCase()) + '-v-' + i,
              price: faker.number.int({ min: 500, max: 9000 }),
              color: faker.color.human(),
              stock: faker.number.int({ min: 5, max: 50 }),
              description: faker.commerce.productDescription(),
              imageUrl: faker.image.urlPicsumPhotos(),
            },
          ],
        },
      },
    });
  }

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
