"use client";

import HeaderAdmin from "@/components/admin/HeaderAdmin";
import Button from "@/components/admin/candidates/profile/details/Button";
import ProfileInformation from "@/components/admin/candidates/profile/details/ProfileInformation";
import DetailInformation from "@/components/admin/candidates/profile/details/DetailInformation";
import DetailCommitment from "@/components/admin/candidates/profile/details/DetailCommitment";

export default function DashboardPage() {
  return (
    <main className="sm:p-6 px-6  py-16 pb-8  sm:ml-[266px]">
      {/* Bagian header */}
      <HeaderAdmin
        title="Personal Information"
        description="Your Candidate's Personal Information"
      />

      <section className="block mt-4 lg:flex  gap-6 text-white  ">
        <ProfileInformation />
        <div className="w-full mt-4 sm:mt-6 lg:mt-0 lg:w-4/6 flex flex-col gap-4 sm:gap-6">
          <DetailInformation />
          <DetailCommitment />
          <div className="block w-full sm:flex justify-between">
            <Button className=" w-full sm:w-[170px]">CV</Button>
            <Button className="sm:mt-0 mt-4 w-full sm:w-[170px]">
              Portfolio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
