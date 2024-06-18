"use client";

import React, { useCallback, useState } from "react";
import SearchIconNew from "../icons/SearchIconNew";
import CaretGreyIcon from "../icons/CaretGreyIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterJobs = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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

  const [form, setForm] = useState({
    name: "",
    department: "",
    division: "",
  });

  const handleFilterJobs = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    replace(
      `${pathname}?${createQueryString("name", form.name)}&${createQueryString(
        "department",
        form.department
      )}&${createQueryString("division", form.division)}`,

      {
        scroll: false,
      }
    );
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
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full mb-2 lg:w-[425px] h-[52px] md:mr-6 rounded-[50px] pl-[40px] py-1 text-black"
            type="text"
            placeholder="Masukkan kata kunci"
            name="name"
          />
        </div>

        <div className="flex w-full gap-2 mb-2">
          <div className="relative w-full">
            <select
              onChange={(e) =>
                setForm((prev) => ({ ...prev, department: e.target.value }))
              }
              className="w-full md:w-[216px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border text-black"
              name="departement"
              id=""
            >
              <option className="text-black" value="1">
                1
              </option>
              <option className="text-black" value="2">
                2
              </option>
              <option className="text-black" value="3">
                3
              </option>
            </select>
            <div className="absolute inset-y-0 top-1 right-2 md:right-5 flex items-center pointer-events-none">
              <CaretGreyIcon />
            </div>
          </div>

          <div className="relative w-full">
            <select
              onChange={(e) =>
                setForm((prev) => ({ ...prev, division: e.target.value }))
              }
              className="w-full md:w-[153px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border text-black"
              name="devisi"
              id=""
            >
              <option className="text-black" value="1">
                1
              </option>
              <option className="text-black" value="2">
                2
              </option>
              <option className="text-black" value="3">
                3
              </option>
            </select>
            <div className="absolute inset-y-0 top-1 right-5 md:right-7 flex items-center pointer-events-none">
              <CaretGreyIcon />
            </div>
          </div>
        </div>
        <button
          className="bg-secondary w-full lg:w-[92px] h-[52px] rounded-[50px] px-5"
          type="submit"
        >
          Cari
        </button>
      </div>
    </form>
  );
};

export default FilterJobs;
