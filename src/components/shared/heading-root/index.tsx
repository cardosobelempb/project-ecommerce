interface HeadingRootProps {
  children: React.ReactNode;
  className?: string;
}
export default function HeadingRoot({ children, className }: HeadingRootProps) {
  return (
    <>
      <h3 className={`font-semibold text-black ${className}`}>
        {children ? children : "HeadingRoot"}
      </h3>
    </>
  );
}
