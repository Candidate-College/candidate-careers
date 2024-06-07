"use client";

import Profile from "@/components/admin/dashboard/Profile";
import SearchNav from "@/components/admin/dashboard/SearchNav";
import Pagination from "@/components/admin/dashboard/Pagination";

import { applicant } from "@/data/applicantData";
import { CardCandidate } from "@/components/admin/dashboard/CardCandidate";

export default function DashboardPage() {
  return (
    <main className="p-6 py-4 pb-8 ml-[266px] hidden lg:block">
      {/* Header Section */}
      <section className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
        <div className="py-4 w-full lg:w-5/12">
          <h1 className="lg:mt-4 sm:mt-2 xxsm:mt-20 lg:text-[46px] sm:text-[46px] xxsm:text-[34px] leading-[42px] font-normal">
            Profile
          </h1>
          <div className="text-[16px] mt-2 text-gray">
            Your Candidate’s Profile
          </div>
        </div>
        <div className="hidden sm:flex  flex-1 ">
          <SearchNav />
          <Profile />
        </div>
      </section>

      {/* Card */}
      <section className="flex flex-wrap mt-6">
        {applicant.map((data, index) => (
          <CardCandidate
            key={index}
            img={"/decoration/example-candidate-image.png"}
            name={data.name}
            division={data.division}
            email={`mailto: ${data.email}`}
            phoneNumber={`https://wa.me/${data.phoneNumber}`}
          />
        ))}
      </section>

      {/* Footer */}
      <section className="flex items-center justify-between pt-5">
        <div>
          <span className="text-[#00000081] text-[14px]">
            Showing 1 to 10 of 20, 567 entries
          </span>
        </div>
        <div>
          <Pagination />
        </div>
        <div className="flex gap-1">
          <span>show</span>
          <select
            className="bg-primary text-white rounded-lg text-[10px]"
            name=""
            id=""
          >
            <option defaultChecked>10</option>
            <option defaultChecked>20</option>
          </select>
          <span>entries</span>
        </div>
      </section>
    </main>
  );
}
