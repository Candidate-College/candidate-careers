import Navbar from "@/components/Navbar";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import React from "react";

const DetailJob = () => {
  return (
    <main className="bg-white w-full h-full relative">
      <Navbar position="sticky" />

      <div className="absolute h-[343px] bg-primary w-full -z-50"></div>
      <section className="py-[72px] bg-primary flex">
        <div className="text-white h-fit w-full sm:container px-6 sm:px-0 sm:mx-auto xl:max-w-[972px]">
          <h3 className="text-white mb-4 font-bold text-[32px] lg:text-[45px]">
            Front-end Developer
          </h3>
          <div className="flex gap-6 flex-col-reverse md:flex-row">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
              <div className="flex items-center gap-x-2">
                <BriefCasePrimaryIcon fill="#90A3BF" />

                <p className="text-base lg:text-[22px] text-[#90A3BF] font-medium">
                  Departement
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <DotPrimaryIcon fill="#90A3BF" />

                <p className="text-base lg:text-[22px] text-[#90A3BF] font-medium">
                  Web Development
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-y-4">
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Internship
              </p>
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Staff
              </p>

              <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-xs lg:text-base font-medium mr-4">
                Urgent Hiring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative before:h-[343px] before:bg-primary before:absolute before:content-[''] before:w-full">
        <div className="text-white top-36 relative z-50 bg-white h-fit">
          <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
            Front-end Developer
          </h3>
          <div className="flex items-center flex-wrap gap-y-4">
            <BriefCasePrimaryIcon />

            <p className="text-base text-black ml-2 mr-4">Departement</p>
            <DotPrimaryIcon />

            <p className="text-base text-black ml-2 mr-4">Web Development</p>

            <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4">
              Internship
            </p>
            <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-base mr-4">
              Staff
            </p>

            <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-base mr-4">
              Urgent Hiring
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default DetailJob;
