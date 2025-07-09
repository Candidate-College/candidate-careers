"use client";

import React, { Fragment, useEffect } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import NotFoundPosition from "./NotFoundPosition";
import axios from "axios";
import ContainerJob from "@/components/jobs/ContainerJob";
import { positions } from "./ListJobs";

const MoreJobs = () => {
  const isEmptyState = false;

  useEffect(() => {
    const getAPI = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
      } catch (error) {
        console.log(error);
      }
    };

    getAPI();
  }, []);

  return (
    <Fragment>
      {!isEmptyState ? (
        <Fragment>
          <h2 className="relative text-2xl font-bold lg:text-[32px] lg:leading-10 text-[#90A3BF] justify-self-start w-full md:max-w-[972px] px-10 md:px-[86px]">
            All Open Positions
          </h2>
          <ContainerJob>
            {positions.slice(0, 5).map((position, idx) => (
              <Link
                href={`/all-jobs/${position.slug}`}
                key={idx}
                className="flex items-center even:bg-[#F8F8F8] py-6"
              >
                <div className="ml-6 lg:ml-[74px] w-full lg:w-[80%]">
                  <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                    {position.name}
                  </h3>
                  <div className="flex items-center flex-wrap gap-y-2">
                    <BriefCasePrimaryIcon />

                    <p className="text-base text-black ml-2 mr-4">
                      {position.department}
                    </p>
                    <DotPrimaryIcon />

                    <p className="text-base text-black ml-2 mr-4">
                      {position.sector}
                    </p>

                    <p className="bg-secondary px-3 lg:px-4 py-1 text-primary rounded-2xl text-base mr-4">
                      {position.role}
                    </p>
                    <p className="bg-secondary px-3 lg:px-4 py-1 text-primary rounded-2xl text-base mr-4">
                      {position.division}
                    </p>
                    {position.urgent && (
                      <p className="bg-[#CB3A31] px-3 lg:px-4 py-1 text-white rounded-2xl text-base mr-4">
                        Urgent Hiring
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}

            <div className="text-primary flex items-center justify-center font-bold text-center text-[14px] lg:text-[22px] leading-[28px] my-6">
              <Link href="/all-jobs">View more jobs</Link>
              <div className="relative">
                <ArrowRight />
              </div>
            </div>
          </ContainerJob>
        </Fragment>
      ) : (
        <NotFoundPosition />
      )}
    </Fragment>
  );
};

export default MoreJobs;
