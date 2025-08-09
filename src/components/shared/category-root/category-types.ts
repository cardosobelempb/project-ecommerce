import { Category } from '@prisma/client';

export interface CategoryRootProps {
  categories: Category[]
}

export interface CategoryParmsProps {
  params: Promise<{slug: string}>
}