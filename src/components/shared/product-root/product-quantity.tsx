"use client";

import { MinusIcon, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex items-center justify-between gap-x-2 self-start rounded-md border border-gray-300 bg-gray-100 px-3 py-1">
        <Button
          onClick={handleDecrement}
          size={"icon"}
          className="cursor-pointer border-0 bg-transparent text-2xl"
          variant={"outline"}
        >
          <MinusIcon />
        </Button>
        <p className="text-lg">{quantity}</p>
        <Button
          onClick={handleIncrement}
          size={"icon"}
          className="cursor-pointer border-0 bg-transparent text-2xl"
          variant={"outline"}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
