import Navbar from "@/components/Navbar";
import FilterJobs from "@/components/jobs/FilterJobs";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import ContainerJob from "@/components/jobs/ContainerJob";
import LoadingListJobs from "@/components/jobs/Loading";
const ListJobs = dynamic(() => import("@/components/jobs/ListJobs"), {
  ssr: false,
  loading: () => (
    <ContainerJob>
      <LoadingListJobs list={5} />
    </ContainerJob>
  ),
});

export type TFilterJob = {
  name: string;
  department: string;
  division: string;
};

const AllJobs = async ({ searchParams }: { searchParams?: TFilterJob }) => {
  const name = searchParams?.name || "";
  const department = searchParams?.department || "";
  const division = searchParams?.division || "";

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
        <Suspense>
          <ListJobs name={name} department={department} division={division} />
        </Suspense>
      </section>
      {/* AKhir Open Position Section */}
    </main>
  );
};

export default AllJobs;
