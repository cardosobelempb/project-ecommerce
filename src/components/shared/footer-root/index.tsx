import HeadingRoot from "../heading-root";

export default function FooterRoot() {
  return (
    <footer className="bg-gray-100 px-6 py-8">
      <HeadingRoot className="text-[12px]">
        © 2025 Copyright BEWEAR
      </HeadingRoot>
      <p className="text-[12px] text-gray-500">Todos os direitos reservados.</p>
    </footer>
  );
}
