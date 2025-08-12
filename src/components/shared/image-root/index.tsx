"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { ImageRootProps } from "./image-types";

export default function ImageRoot({
  src,
  alt,
  width = "w-full",
  height = "h-64",
  rounded = "rounded-md",
  size,
  selected,
  classImage,
  ...props
}: ImageRootProps) {
  return (
    <div
      className={cn(
        "relative",
        width,
        height,
        rounded,
        size,
        selected ? "border-primary border-2" : "",
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", rounded, classImage)}
        sizes="100vh"
        priority
      />
    </div>
  );
}
