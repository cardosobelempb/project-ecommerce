/*
  Warnings:

  - You are about to drop the column `category_id` on the `product_variants` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `product_variants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."product_variants" DROP CONSTRAINT "product_variants_category_id_fkey";

-- AlterTable
ALTER TABLE "public"."product_variants" DROP COLUMN "category_id",
ADD COLUMN     "product_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."product_variants" ADD CONSTRAINT "product_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
