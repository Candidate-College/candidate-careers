"use client";

// Import Modules
import React, { useEffect, useState } from "react";

// Import Components
import Profile from "@/components/admin/dashboard/Profile";
import SearchNav from "@/components/admin/dashboard/SearchNav";

// Import Icon
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

// Static Form Data
const divisionName = [
  "Chief Development Officer",
  "Chief Project Officer",
  "Chief Creative Officer",
  "Chief Relation Officer",
  "Public Relation Manager",
  "Communicative Creative Media Manager",
  "Social Media Specialist",
  "Web Development",
  "Creative Writer",
  "Social Media Editor",
  "Content Writer",
  "Academic Development",
  "Treasurer",
  "Marketing",
  "Podcast",
  "Event Organizer",
  "Event Crew",
  "Talent Engagement",
  "People and Culture",
  "Secretary",
  "Community Partner",
  "External Relation",
];

const positionName = [
  "C-Level",
  "Manager",
  "Vice Manager",
  "Head",
  "Co Head",
  "Staff",
];

const typeName = ["Onsite", "Hybrid", "Remote"];

export default function DashboardPage() {
  // Change Color of Urgently Hiring Button
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Hidden Component Search Nav and Profile on tablet-sized Screen
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1080);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <main>
      <div className="p-6 py-4 pb-8 lg:ml-[266px] md:ml-[270px] sm:ml-[270px] mb-4 lg:block">
        {/* Header Section */}
        <section className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
          <div className="py-4 w-full lg:w-5/12">
            <h1 className="lg:mt-4 sm:mt-2 xxsm:mt-20 lg:text-[46px] sm:text-[46px] xxsm:text-[34px] leading-[42px] font-normal">
              Add New Job
            </h1>
            <div className="text-[16px] mt-2 text-gray">Add Your New Job’s</div>
          </div>
          {!isMobile && (
            <div className="hidden sm:flex  flex-1 ">
              <SearchNav />
              <Profile />
            </div>
          )}
        </section>

        {/* Content Section */}
        <form
          className="flex flex-wrap bg-primary mt-6 ps-8 pt-12 pb-10 rounded-lg"
          action="javascript:void(0);"
        >
          {/* Vacancy Name */}
          <div className="flex flex-col mt-4 lg:w-1/2 xxsm:w-full">
            <label htmlFor="vacancyName" className="text-white font-medium">
              Vacancy Name *
            </label>
            <input
              type="text"
              name="vacancyName"
              placeholder="Vacancy Name"
              className="mt-4 bg-primary border border-slate-500 text-sm text-gray font-normal p-2 w-11/12 rounded-sm"
            />
          </div>
          {/* Position */}
          <div className="flex flex-col mt-4 lg:w-1/2 xxsm:w-full">
            <label htmlFor="position" className="text-white font-medium">
              Position *
            </label>
            <select className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 text-gray font-normal rounded-sm">
              {positionName.map((data, index) => (
                <option
                  key={index}
                  value={data}
                  className="text-primary font-normal bg-white"
                >
                  {data}
                </option>
              ))}
            </select>
          </div>
          {/* Division */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label htmlFor="division" className="text-white font-medium">
              Division *
            </label>
            <select className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 text-gray font-normal rounded-sm">
              {divisionName.map((data, index) => (
                <option
                  key={index}
                  value={data}
                  className="text-primary font-normal bg-white"
                >
                  {data}
                </option>
              ))}
            </select>
          </div>
          {/* Type */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label htmlFor="type" className="text-white font-medium">
              Type *
            </label>
            <select className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 text-gray font-normal rounded-sm">
              {typeName.map((data, index) => (
                <option
                  key={index}
                  value={data}
                  className="text-primary font-normal bg-white"
                >
                  {data}
                </option>
              ))}
            </select>
          </div>
          {/* Responsibilites */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label
              htmlFor="responsibilities"
              className="text-white font-medium"
            >
              Responsibilities *
            </label>
            <textarea
              className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 h-32 text-gray font-normal rounded-sm"
              style={{ resize: "none" }}
              placeholder="Responsibilities"
            ></textarea>
          </div>
          {/* Qualification Skills */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label
              htmlFor="qualificationSkills"
              className="text-white font-medium"
            >
              Qualification Skills *
            </label>
            <textarea
              className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 h-32 text-gray font-normal rounded-sm"
              style={{ resize: "none" }}
              placeholder="Qualification Skills"
            ></textarea>
          </div>
          {/* Benefits */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label htmlFor="benefits" className="text-white font-medium">
              Benefits *
            </label>
            <textarea
              className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 h-32 text-gray font-normal rounded-sm"
              style={{ resize: "none" }}
              placeholder="Benefits"
            ></textarea>
          </div>
          {/* Description */}
          <div className="flex flex-col mt-6 lg:w-1/2 xxsm:w-full">
            <label htmlFor="description" className="text-white font-medium">
              Description *
            </label>
            <textarea
              className="mt-4 bg-primary border border-slate-500 text-sm p-2 w-11/12 h-32 text-gray font-normal rounded-sm"
              style={{ resize: "none" }}
              placeholder="Description"
            ></textarea>
          </div>
          {/* Urgent Hiring */}
          <div className="flex mt-8 flex-row w-full items-center">
            <button
              className={`bg-primary me-3 p-3 border border-slate-500 rounded-md ${
                clicked ? "bg-red-600" : "bg-primary"
              }`}
              onClick={handleClick}
            ></button>
            <div className="text-white font-medium text-sm">
              Urgent Hiring *
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex flex-row mt-12 mb-3">
            <button className="bg-secondary text-primary font-bold text-sm px-7 py-2.5 rounded-full">
              SUBMIT DATA &nbsp;&nbsp;
              <ChevronRightRoundedIcon fontSize="medium" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
