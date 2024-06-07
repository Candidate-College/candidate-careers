import Profile from "./dashboard/Profile";
import SearchNav from "./dashboard/SearchNav";

export default function HeaderAdmin({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="flex   lg:flex-row flex-col lg:items-center lg:justify-between">
      <div className="py-4 w-full  lg:w-5/12">
        <h1 className="text-[32px] leading-[42px]   font-normal">{title}</h1>
        <span className="text-[16px] text-gray">{description}</span>
        {/* <h1 className="text-[57px] font-normal leading-[58px]">Candidate</h1>
        <span className="text-[16px] text-gray">
          Reporting of your candidate
        </span> */}
      </div>
      <div className="hidden sm:flex  flex-1 ">
        <SearchNav />
        <Profile />
      </div>
    </section>
  );
}
