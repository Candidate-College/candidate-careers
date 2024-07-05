import { VacancyDetail } from "@/app/[slug]/page";
import BlackCaretIcon from "@/components/icons/BlackCaretIcon";
import BriefCaseGreyIcon from "@/components/icons/BriefCaseGreyIcon";
import DotGreyIcon from "@/components/icons/DotGreyIcon";
import Link from "next/link";
import React from "react";

interface VacancyHeroProps {
  vacancyDetail: VacancyDetail;
}

const VacancyHero: React.FC<VacancyHeroProps> = ({ vacancyDetail }) => {
  return (
    <section className="flex flex-col px-8 pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center lg:items-start relative h-fit md:h-screen overflow-hidden">
      <div className="flex flex-col items-start lg:ml-[176px]">
        <h1 className="text-[32px] lg:text-[45px] font-bold text-white">
          {vacancyDetail?.name}
        </h1>

        <div className="flex flex-col-reverse gap-2 mt-2 lg:flex-row  lg:gap-6 lg:items-center lg: lg:mt-6">
          <div className="h-full  flex mt-1">
            <BriefCaseGreyIcon />
            <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
              {vacancyDetail?.department}
            </p>
          </div>

          <div className="h-full flex mt-1">
            <DotGreyIcon />
            <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
              {vacancyDetail?.division}
            </p>
          </div>

          <div className="flex gap-2 lg:gap-4">
            {[
              "Internship",
              vacancyDetail?.position,
              vacancyDetail?.is_urgent ? "Urgent Hiring" : "",
            ]
              .filter(Boolean)
              .map((data, index) => (
                <div
                  key={index}
                  className={`h-full rounded-full justify-center px-4 py-[2px] ${
                    data?.includes("Urgent Hiring")
                      ? "bg-red-600/80 text-white"
                      : "bg-secondary text-primary"
                  } flex lg:mt-0 mt-1 `}
                >
                  <p className="text-[12px] lg:text-[17px] lg:leading-[28px]">
                    {data}
                  </p>
                </div>
              ))}
          </div>
        </div>

        <button className="mt-10 rounded-[50px] px-[35px] py-3 w-full h-full bg-secondary flex items-center justify-center text-primary lg:hidden">
          <Link href={`/apply-form?id-vacancy=${vacancyDetail.slug}`}>
            Apply Now
          </Link>
          <div className="ml-2 self-center">
            <BlackCaretIcon />
          </div>
        </button>
      </div>
    </section>
  );
};

export default VacancyHero;
