import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CategoryRootProps } from "./category-types";

export default function CategorySelected({ categories }: CategoryRootProps) {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Button
            variant={"ghost"}
            className="w-full cursor-pointer rounded-full bg-white text-xs font-semibold text-black"
            key={category.id}
          >
            <Link
              className="roundend-full w-full bg-white"
              href={`/category/${category.slug}`}
            >
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
