import Image from "next/image";
import Link from "next/link";

export default function BrandRoot() {
  return (
    <Link href={`/`}>
      <Image alt="" src="/logo.svg" width={100} height={26.14} />
    </Link>
  );
}
