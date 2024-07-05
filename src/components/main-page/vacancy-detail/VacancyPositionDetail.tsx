import { VacancyDetail } from "@/app/[slug]/page";
import BehanceLogo from "@/components/icons/BehanceLogo";
import DribbbleLogo from "@/components/icons/DribbbleLogo";
import InstagramLogo from "@/components/icons/InstagramLogo";
import LinkedInLogo from "@/components/icons/LinkedInLogo";
import Link from "next/link";
import React from "react";

interface VacancyPositionDetailProps {
  vacancyDetail: VacancyDetail;
}

const VacancyPositionDetail: React.FC<VacancyPositionDetailProps> = ({
  vacancyDetail,
}) => {
  return (
    <section className="w-full py-[80px] relative lg:mt-[96px] lg:bottom-[400px] lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col lg:flex-row lg:justify-around  w-full items-start px-6 shadow-none lg:shadow-xl  bg-white lg:rounded-[50px]  lg:ml-[120px] lg:mr-[120px] lg:pt-[72px]  lg:pb-[72px] lg:px-[68px]">
        <div className="flex flex-col gap-y-9 lg:w-[70%] ">
          {/* job requirements */}
          <div className="flex flex-col w-full items-start">
            <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
              Requirements
            </h2>

            {/* Render requirements */}
            <div
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: vacancyDetail?.requirements,
              }}
              className="html-content text-primary text-[18px]"
            />
          </div>
          {/* end of job requirements */}

          {/* job description */}
          <div className="flex flex-col w-full items-start ">
            <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
              Job Description
            </h2>

            <div
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: vacancyDetail?.description,
              }}
              className="html-content text-primary text-[18px] max-w-2xl text-justify"
            />
          </div>
          {/* end of job description */}

          {/* job Responsibility */}
          <div className="flex flex-col w-full items-start ">
            <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
              Responsibility
            </h2>
            <div
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: vacancyDetail?.responsibilities,
              }}
              className="html-content text-primary text-[18px] max-w-2xl text-justify"
            />
          </div>
          {/* end of job Responsibility */}

          {/* job benefits */}
          <div className="flex flex-col w-full items-start">
            <h2 className="text-[24px] mb-6  text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
              Benefits
            </h2>

            <div
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: vacancyDetail?.benefits,
              }}
              className="html-content text-primary text-[18px] max-w-2xl text-justify"
            />
          </div>
          {/* end of job benefits */}

          {/* about the team */}
          <div className="flex flex-col w-full items-start ">
            <h2 className="text-[24px] leading-[32px] text-primary lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
              About the team
            </h2>

            <div
              dangerouslySetInnerHTML={{
                // @ts-ignore
                __html: vacancyDetail?.about_the_team,
              }}
              className="html-content text-primary text-[18px] max-w-2xl text-justify"
            />
          </div>
          {/* end of about the team */}

          {/* share the listing mobile */}
          <div className="flex flex-col w-full items-start mt-4 gap-3 lg:hidden">
            <h3 className="text-[16px] text-primary leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
              Share the listing:
            </h3>

            <div className="flex gap-[14px] mt-2 mb-6 lg:hidden">
              {/* dribble logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <DribbbleLogo />
              </div>
              {/* end of dribble logo */}

              {/* behance logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <BehanceLogo />
              </div>
              {/* end of behance logo */}

              {/* instagram logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <InstagramLogo />
              </div>
              {/* end of instagram logo */}

              {/* linkedin logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <LinkedInLogo />
              </div>
              {/* end of linkedin logo */}
            </div>
          </div>
          {/* end of share the listing mobile */}
        </div>

        <div className="flex flex-col">
          <button className="mt-10 rounded-[50px] hover:bg-[#d4bc5c] drop-shadow-xl text-lg px-20 py-4 font-bold h-full text-primary bg-secondary items-center justify-center hidden lg:flex w-max">
            <Link href={`/apply-form?id-vacancy=${vacancyDetail.slug}`}>
              Apply Now
            </Link>
          </button>

          {/* share the listing desktop */}
          <div className="w-full gap-2 items-start mt-6 hidden lg:flex lg:flex-col">
            <h3 className="text-[16px] text-primary leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
              Share the listing:
            </h3>

            <div className="gap-[14px] mt-2 mb-6 hidden lg:flex">
              {/* dribble logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <DribbbleLogo />
              </div>
              {/* end of dribble logo */}

              {/* behance logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <BehanceLogo />
              </div>
              {/* end of behance logo */}

              {/* instagram logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <InstagramLogo />
              </div>
              {/* end of instagram logo */}

              {/* linkedin logo */}
              <div className="bg-secondary p-3 rounded-[25px]">
                <LinkedInLogo />
              </div>
              {/* end of linkedin logo */}
            </div>
          </div>
          {/* end of share the listing desktop */}
        </div>
      </div>
    </section>
  );
};

export default VacancyPositionDetail;
