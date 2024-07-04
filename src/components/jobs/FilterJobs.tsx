"use client";

import React, { useCallback, useState } from "react";
import SearchIconNew from "@/components/icons/SearchIconNew";
import CaretGreyIcon from "@/components/icons/CaretGreyIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// FilterJobs component untuk memfilter pekerjaan berdasarkan nama, departemen, dan divisi
const FilterJobs = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [form, setForm] = useState({
    name: searchParams.get("name") || "",
    department: searchParams.get("department") || "",
    division: searchParams.get("division") || "",
  });

  // Membuat query string berdasarkan parameter filter
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (params.size > 0) {
        params.delete("name");
        params.delete("department");
        params.delete("division");
      }
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // Handle filter pekerjaan saat form disubmit
  const handleFilterJobs = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    replace(
      `${pathname}?${createQueryString("name", form.name)}&${createQueryString(
        "department",
        form.department
      )}&${createQueryString("division", form.division)}`,
      { scroll: false }
    );
  };

  // Handle clear parameters saat input diubah
  const handleClearParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));

    if (e.target.value === "" && typeof window !== "undefined") {
      replace(pathname, { scroll: false });
      setForm({
        name: "",
        department: "",
        division: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleFilterJobs}
      className="mt-[42px] flex space-x-6 w-full sm:w-[425px] md:w-fit"
    >
      <div className="flex flex-col lg:flex-row w-full mx-7 items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 bottom-2 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIconNew />
          </div>
          <input
            required
            autoComplete="off"
            value={form.name}
            onChange={handleClearParams}
            className="w-full mb-2 lg:w-[425px] h-[52px] md:mr-6 rounded-[50px] pl-[40px] py-1 text-black"
            type="text"
            placeholder="Masukkan kata kunci"
            name="name"
          />
        </div>

        <div className="flex w-full gap-2 mb-2">
          <div className="relative w-full">
            <select
              required
              value={form.department}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, department: e.target.value }))
              }
              className="w-full md:w-[216px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border text-black invalid:text-[#90A3BF]"
              name="department"
            >
              <option value="" disabled hidden className="text-[#90A3BF]">
                Departement
              </option>
              <option className="text-black" value="Technology Officer">
                Technology Officer
              </option>
              <option className="text-black" value="Cto">
                Cto
              </option>
              <option className="text-black" value="Ceo">
                Ceo
              </option>
            </select>
            <div className="absolute inset-y-0 top-1 right-2 md:right-5 flex items-center pointer-events-none">
              <CaretGreyIcon />
            </div>
          </div>

          <div className="relative w-full">
            <select
              value={form.division}
              required
              onChange={(e) =>
                setForm((prev) => ({ ...prev, division: e.target.value }))
              }
              className="w-full md:w-[153px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border text-black invalid:text-[#90A3BF]"
              name="division"
            >
              <option value="" disabled hidden className="text-[#90A3BF]">
                Divisi
              </option>
              <option className="text-black" value="Web Development">
                Web Development
              </option>
              <option className="text-black" value="Humas">
                Humas
              </option>
              <option className="text-black" value="Fullstack">
                Fullstack
              </option>
            </select>
            <div className="absolute inset-y-0 top-1 right-5 md:right-7 flex items-center pointer-events-none">
              <CaretGreyIcon />
            </div>
          </div>
        </div>
        <button
          className="bg-secondary w-full lg:w-[92px] h-[52px] rounded-[50px] px-5 text-[#1B4E6B] font-semibold text-base"
          type="submit"
        >
          Cari
        </button>
      </div>
    </form>
  );
};

export default FilterJobs;
