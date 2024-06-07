export default function DetailInfo({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="mt-6 text-[14px]  sm:text-[12px] ">
      <h3 className="font-semibold ">{title}</h3>
      <div className="w-full overflow-x-auto">
        <span className="text-[#D1D5DB]">{content}</span>
      </div>
    </div>
  );
}
