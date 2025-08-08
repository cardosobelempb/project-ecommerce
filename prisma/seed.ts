import { faker } from '@faker-js/faker';
import { PrismaClient, STATUS_PRODUCT } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[.,/#!$%^&*;:{}=_`~()]/g, '');
}

async function main() {
  const now = new Date();

  // 1. Criar 3 categorias
  const categoryData = Array.from({ length: 3 }).map(() => {
    const name = faker.commerce.department();
    return {
      id: uuid(),
      name,
      slug: slugify(name),
      description: faker.commerce.productDescription(),
      image: faker.image.urlPicsumPhotos(),
      createdAt: now,
    };
  });

  await prisma.category.createMany({ data: categoryData });

  const categories = await prisma.category.findMany();

  // 2. Criar 20 produtos
  const productData = Array.from({ length: 20 }).map(() => {
    const name = faker.commerce.productName();
    const category = faker.helpers.arrayElement(categories);
    return {
      id: uuid(),
      name,
      slug: slugify(name),
      description: faker.commerce.productDescription(),
      status: faker.helpers.arrayElement(Object.values(STATUS_PRODUCT)),
      createdAt: now,
      categoryId: category.id,
    };
  });

  await prisma.product.createMany({ data: productData });

  const products = await prisma.product.findMany();

  // 3. Criar 5 variantes (uma para cada produto aleatório)
  const sampledProducts = faker.helpers.arrayElements(products, 5);

  const variantData = sampledProducts.map((product) => {
    const color = faker.color.human();
    const name = `${product.name} - ${color}`;
    return {
      id: uuid(),
      name,
      price: faker.number.int({ min: 10000, max: 500000 }),
      slug: slugify(name),
      description: faker.commerce.productDescription(),
      imageUrl: faker.image.url(),
      color,
      stock: faker.number.int({ min: 1, max: 100 }),
      createdAt: now,
      productId: product.id,
    };
  });

  await prisma.productVariant.createMany({ data: variantData });

  console.log('🌱 Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
