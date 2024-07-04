"use client";

import React, { Fragment, useCallback, useEffect, useState } from "react";
import useCheckSize from "@/hooks/useResize";
import NotFoundPosition from "@/components/jobs/NotFoundPosition";
import axios from "axios";
import { TFilterJob } from "@/app/all-jobs/page";
import ContainerJob from "@/components/jobs/ContainerJob";
import { TVacanciesResponse } from "@/types/vacancies.type";
import Loader from "@/components/icons/Loader";
import CardJob from "@/components/jobs/CardJob";
import LoadingListJobs from "@/components/jobs/Loading";

// ListJobs component menerima props untuk filter
const ListJobs = ({ name, department, division }: TFilterJob) => {
  const { itemsToShow, showMoreItems, isMobile } = useCheckSize(5, 10);
  const [listVacancies, setListVacancies] = useState<TVacanciesResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  // Memuat lebih banyak data lowongan pekerjaan
  const loadMoreData = async () => {
    if (listVacancies && itemsToShow < listVacancies.pagination.total) {
      showMoreItems();
      const nextPage = listVacancies.pagination.current_page + 1;
      if (nextPage <= listVacancies.pagination.last_page) {
        const newVacancies = await fetchVacancies(nextPage);
        if (!newVacancies) return;

        setListVacancies((prevState) => ({
          ...newVacancies,
          data: [...(prevState?.data || []), ...newVacancies.data],
        }));
      }
    }
  };

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
            <div className="flex flex-col text-base text-primary justify-center items-center gap-5 pt-10">
              <p>
                Showing{" "}
                <span className="font-bold">
                  {itemsToShow > listVacancies.data.length
                    ? listVacancies.data.length
                    : itemsToShow}
                </span>{" "}
                out of{" "}
                <span className="font-bold">
                  {listVacancies.pagination.total}
                </span>
              </p>
              <button
                disabled={Boolean(
                  itemsToShow > listVacancies.pagination.total || isLoading
                )}
                onClick={loadMoreData}
                type="button"
                style={{ boxShadow: "0px 25px 30px 0px #0041E81A" }}
                className={`font-semibold lg:font-semibold px-7 py-3 lg:px-8 lg:py-4 bg-[#FFDE59] rounded-[30px] text-[#1B4E6B] w-[185px] ${
                  itemsToShow < listVacancies.pagination.total
                    ? "cursor-pointer "
                    : "cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <Loader className="animate-spin mx-auto" />
                ) : (
                  <span>Load More Jobs</span>
                )}
              </button>
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

export default ListJobs;
