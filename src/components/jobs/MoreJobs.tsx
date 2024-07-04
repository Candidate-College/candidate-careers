"use client";

import React, { Fragment, useCallback, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import NotFoundPosition from "./NotFoundPosition";
import axios from "axios";
import ContainerJob from "@/components/jobs/ContainerJob";
import { useSearchParams } from "next/navigation";
import useCheckSize from "@/hooks/useResize";
import { TVacanciesResponse } from "@/types/vacancies.type";
import LoadingListJobs from "@/components/jobs/Loading";
import CardJob from "@/components/jobs/CardJob";

const MoreJobs = () => {
  const { itemsToShow, showMoreItems, isMobile } = useCheckSize(5, 10);
  const [listVacancies, setListVacancies] = useState<TVacanciesResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const department = searchParams.get("department") || "";
  const division = searchParams.get("division") || "";

  // Fetch data lowongan pekerjaan dengan filter yang diberikan
  const fetchVacancies = useCallback(
    async (page = 1) => {
      try {
        setIsLoading(true);
        const { data: values } = await axios.get(
          `${process.env.api}/api/vacancies?page=${page}`
        );
        const res: TVacanciesResponse = values;

        // Filter data berdasarkan nama, departemen, dan divisi
        const filteredData = res.data.filter((vacancy) => {
          const nameMatch = name
            ? vacancy.name
                .toLocaleLowerCase()
                .includes(name.toLocaleLowerCase())
            : true;
          const departmentMatch = department
            ? vacancy.department
                .toLocaleLowerCase()
                .includes(department.toLocaleLowerCase())
            : true;
          const divisionMatch = division
            ? vacancy.division
                .toLocaleLowerCase()
                .includes(division.toLocaleLowerCase())
            : true;

          return nameMatch && departmentMatch && divisionMatch;
        });

        return { ...res, data: filteredData };
      } catch (error) {
        setIsError(true);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [name, department, division]
  );

  // Mengambil data lowongan pekerjaan saat komponen dimuat
  useEffect(() => {
    const getVacancies = async () => {
      const initialVacancies = await fetchVacancies();
      if (initialVacancies) {
        setListVacancies(initialVacancies);
      }
    };
    getVacancies();
  }, [fetchVacancies]);

  if (isError) {
    return <h1>Error</h1>;
  }

  // console.log(listVacancies);

  return listVacancies !== null ? (
    <Fragment>
      {listVacancies.data.length === 0 ? (
        <NotFoundPosition />
      ) : (
        <Fragment>
          <h2 className="relative text-2xl font-bold lg:text-[32px] lg:leading-10 text-[#90A3BF] justify-self-start w-full md:max-w-[972px] px-10 md:px-[86px]">
            All Open Positions
          </h2>
          <ContainerJob>
            {listVacancies.data.slice(0, itemsToShow).map((vacancie, idx) => (
              <CardJob vacancie={vacancie} key={idx} />
            ))}

            <div className="text-primary flex items-center justify-center font-bold text-center text-[14px] lg:text-[22px] leading-[28px] my-6">
              <Link href="/all-jobs">View more jobs</Link>
              <div className="relative">
                <ArrowRight />
              </div>
            </div>
          </ContainerJob>
        </Fragment>
      )}
    </Fragment>
  ) : (
    <ContainerJob>
      <LoadingListJobs list={5} />
    </ContainerJob>
  );
};

export default MoreJobs;
