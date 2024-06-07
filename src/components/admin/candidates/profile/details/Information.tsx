export default function Information({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex px-5  text-[14px] border-b border-b-[#D1D5DB] py-7">
      <div className="w-3/5">
        <h3 className="text-left text-[#D1D5DB]">{title}</h3>
      </div>
      <div className="w-2/5 text-right">
        <p>{content}</p>
      </div>
    </div>
  );
}
