export default function Button({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`${className} bg-secondary  font-semibold   rounded-3xl p-2 sm:p-1   text-[22px] sm:text-[16px]   text-primary`}
    >
      {children}
    </button>
  );
}
