import Link from "next/link";
import React from "react";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import ArrowRight from "@/components/icons/ArrowRight";
import { TVacancy } from "@/types/vacancies.type";

const CardJob = ({ vacancie }: { vacancie: TVacancy }) => {
  return (
    <Link
      href={`/all-jobs/${vacancie.slug}`}
      className="flex items-center even:bg-[#F8F8F8] py-6"
    >
      <div className="ml-6 lg:ml-[74px] w-full lg:w-[80%]">
        <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
          {vacancie.name}
        </h3>
        <div className="flex items-center flex-wrap gap-y-2">
          <BriefCasePrimaryIcon />
          <p className="text-base text-[#6B7280] ml-2 mr-4">
            {vacancie.department}
          </p>
          <DotPrimaryIcon />
          <p className="text-base text-[#6B7280] ml-2 mr-4">
            {vacancie.division}
          </p>
          <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4 font-medium">
            {vacancie.type}
          </p>
          <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4 font-medium">
            {vacancie.position}
          </p>
          {vacancie.is_urgent && (
            <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-base mr-4 font-medium">
              Urgent Hiring
            </p>
          )}
        </div>
      </div>
      <div className="hidden lg:block">
        <ArrowRight />
      </div>
    </Link>
  );
};

export default CardJob;
