"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterJobs from "@/components/jobs/FilterJobs";
import { Suspense } from "react";
import LoadingListJobs from "@/components/jobs/Loading";
import dynamic from "next/dynamic";
import ContainerJob from "@/components/jobs/ContainerJob";
import LifeAtCC from "@/components/main-page/LifeAtCC";
import SliderLifeAtCC from "@/components/main-page/SliderLifeAtCC";
const MoreJobs = dynamic(() => import("@/components/jobs/MoreJobs"), {
  ssr: false,
  loading: () => (
    <ContainerJob>
      <LoadingListJobs />
    </ContainerJob>
  ),
});

const Careers = () => {
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
          <MoreJobs />
        </Suspense>
      </section>
      {/* AKhir Open Position Section */}

      {/* Life at CC Section */}
      <LifeAtCC />
      {/* Akhir Life at CC Section */}

      {/* Slider life at CC Section */}
      <SliderLifeAtCC />
      {/* Akhir Slider life at CC Section */}

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Careers;
