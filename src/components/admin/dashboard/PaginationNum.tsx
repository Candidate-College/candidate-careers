export default function PaginationNum({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="border border-gray w-[30px] h-[30px] p-[10px] text-ellipsis leading-none text-[14px] flex justify-center items-center rounded-[50%]">
      {children}
    </button>
  );
}
