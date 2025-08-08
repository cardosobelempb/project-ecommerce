import CategorySelected from "./category-selected";
import { CategoryRootProps } from "./category-types";

export default function CategoryRoot({ categories }: CategoryRootProps) {
  return (
    <div className="px-6">
      <CategorySelected categories={categories} />
    </div>
  );
}
