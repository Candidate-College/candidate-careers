"use client";

import React, { Fragment, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import useResponsiveItems from "@/hooks/useResize";
import NotFoundPosition from "./NotFoundPosition";
import axios from "axios";
import { TFilterJob } from "@/app/all-jobs/page";
import ContainerJob from "@/components/jobs/ContainerJob";

const positions = [
  {
    id: 1,
    name: "Frontend Developer",
    department: "IT",
    division: "Internship",
    role: "Staff",
    urgent: true,
    sector: "Technology",
  },
  {
    id: 2,
    name: "Backend Developer",
    department: "IT",
    division: "Full-time",
    role: "Senior",
    urgent: false,
    sector: "Technology",
  },
  {
    id: 3,
    name: "UI/UX Designer",
    department: "Design",
    division: "Internship",
    role: "Intern",
    urgent: true,
    sector: "Design",
  },
  {
    id: 4,
    name: "Project Manager",
    department: "Management",
    division: "Full-time",
    role: "Manager",
    urgent: false,
    sector: "Management",
  },
  {
    id: 5,
    name: "QA Engineer",
    department: "IT",
    division: "Contract",
    role: "Staff",
    urgent: true,
    sector: "Technology",
  },
  {
    id: 6,
    name: "DevOps Engineer",
    department: "IT",
    division: "Full-time",
    role: "Senior",
    urgent: false,
    sector: "Technology",
  },
  {
    id: 7,
    name: "Data Scientist",
    department: "Data",
    division: "Full-time",
    role: "Staff",
    urgent: true,
    sector: "Data Analysis",
  },
  {
    id: 8,
    name: "Marketing Specialist",
    department: "Marketing",
    division: "Internship",
    role: "Intern",
    urgent: false,
    sector: "Marketing",
  },
  {
    id: 9,
    name: "Content Writer",
    department: "Content",
    division: "Part-time",
    role: "Staff",
    urgent: true,
    sector: "Content Creation",
  },
  {
    id: 10,
    name: "Customer Support",
    department: "Support",
    division: "Full-time",
    role: "Staff",
    urgent: false,
    sector: "Customer Service",
  },
];

const ListJobs = ({ name, departement, division }: TFilterJob) => {
  const { itemsToShow, showMoreItems, isMobile } = useResponsiveItems(5, 10);

  const isEmptyList = false;

  useEffect(() => {
    const getAPI = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products/categories"
        );
      } catch (error) {
        console.log(error);
      }
    };

    getAPI();
  }, [isMobile, name, departement, division]);

  return (
    <Fragment>
      {!isEmptyList ? (
        <Fragment>
          <h2 className="relative text-2xl font-bold lg:text-[32px] lg:leading-10 text-[#90A3BF] justify-self-start w-full md:max-w-[972px] px-10 md:px-[86px]">
            All Open Positions
          </h2>
          <ContainerJob>
            {positions.slice(0, isMobile ? 5 : 10).map((position, idx) => (
              <Link
                href={`/all-jobs/${position.name}`}
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

                    <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4">
                      {position.role}
                    </p>
                    <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4">
                      {position.division}
                    </p>
                    {position.urgent && (
                      <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-base mr-4">
                        Urgent Hiring
                      </p>
                    )}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <ArrowRight />
                </div>
              </Link>
            ))}

            <div className="flex flex-col text-base text-primary justify-center items-center gap-5 pt-10">
              <p>
                Showing <span className="font-bold">{itemsToShow}</span> out of{" "}
                <span className="font-bold">20</span>
              </p>

              <button
                style={{
                  boxShadow: "0px 25px 30px 0px #0041E81A",
                }}
                onClick={showMoreItems}
                type="button"
                className="font-medium lg:font-semibold px-7 py-3 lg:px-8 lg:py-4 bg-[#FFDE59] rounded-[30px]"
              >
                Load More Jobs
              </button>
            </div>
          </ContainerJob>
        </Fragment>
      ) : (
        <NotFoundPosition />
      )}
    </Fragment>
  );
};

export default ListJobs;
