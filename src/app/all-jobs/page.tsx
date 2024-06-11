import Navbar from "@/components/Navbar";
import FilterJobs from "@/components/jobs/FilterJobs";
import ListJobs from "@/components/jobs/ListJobs";
import React, { Suspense } from "react";

export type TFilterJob = {
  name: string;
  departement: string;
  division: string;
};

const AllJobs = async ({ searchParams }: { searchParams?: TFilterJob }) => {
  return (
    <main className="bg-white w-full h-full overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center relative h-fit md:h-screen overflow-hidden">
        <h1 className="mx-7 font-semibold text-white text-[36px] md:text-[60px] md:w-[90%] text-center md:leading-[100%] leading-[150%]">
          Explore your dream job destination!
        </h1>

        <FilterJobs />
      </section>

      {/* Akhir Hero Section */}

      {/* Open Position Section */}
      <section className="w-full mb-[72px] flex flex-col justify-center items-center relative bottom-[72px] lg:mt-[96px] lg:bottom-[220px]">
        <h2 className="relative text-2xl font-bold lg:text-[32px] lg:leading-10 text-[#90A3BF] justify-self-start w-full md:max-w-[972px] px-10 md:px-[86px]">
          All Open Positions
        </h2>

        <ListJobs />
      </section>
      {/* AKhir Open Position Section */}
    </main>
  );
};

export default AllJobs;
