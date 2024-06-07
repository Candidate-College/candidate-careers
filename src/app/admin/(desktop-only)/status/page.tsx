"use client";

import Table from "@/components/admin/status/Table";
import Pagination from "@/components/admin/dashboard/Pagination";
import HeaderAdmin from "@/components/admin/HeaderAdmin";

const categories = [
  {
    title: "Advance To Interview",
    active: true,
  },
  {
    title: "On Progress",
    active: false,
  },
  {
    title: "Rejected",
    active: false,
  },
];

export default function DashboardPage() {
  return (
    <main className="p-6 py-4 pb-8 ml-[266px] hidden lg:block">
      {/* Bagian header */}
      <HeaderAdmin title="Status" description="Your Candidate’s Status" />

      <section>
        <ul className="flex items-center gap-3 flex-wrap">
          {categories.map(({ title, active }, index) => {
            return (
              <li key={index}>
                <button
                  className={`${
                    active
                      ? "bg-primary  text-white"
                      : "bg-transparent border-gray border-2 text-gray"
                  } text-[14px] rounded-3xl p-3`}
                >
                  {title}
                </button>
              </li>
            );
          })}
          <li className="text-primary font-medium">
            <button>All Position</button>
          </li>
        </ul>
      </section>

      <section>
        <Table />
      </section>
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
