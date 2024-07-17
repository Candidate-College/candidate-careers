import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { VacancyDetail } from "@/app/[slug]/page";
import axios from "axios";

const TitleForm = () => {
  const searchParams = useSearchParams();
  const vacancyId = searchParams.get("id-vacancy");

  const [vacancyDetail, setVacancyDetail] = useState<VacancyDetail | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (vacancyId) {
          const response = await axios.get(
            `https://careers.candidatecollege.org/api/vacancies/${vacancyId}`
          );
          const data = response.data.data;
          setVacancyDetail(data);
          localStorage.setItem("vacancyDetail", JSON.stringify(data));
        } else {
          const localData = localStorage.getItem("vacancyDetail");
          if (localData) {
            setVacancyDetail(JSON.parse(localData));
          } else {
            localStorage.removeItem("vacancyDetail");
          }
        }
      } catch (error) {
        console.log("Fetch Error:", error);
        localStorage.removeItem("vacancyDetail");
      }
    };

    fetchData();
  }, [vacancyId]);

  return (
    <div>
      {vacancyDetail ? (
        <>
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center text-slate-700 sm:text-lg">
            {vacancyDetail.name}
          </h2>
          <div className="flex gap-2 lg:gap-4 justify-center mb-8">
            {[
              "Internship",
              vacancyDetail?.position,
              vacancyDetail?.is_urgent ? "Urgent Hiring" : "",
            ]
              .filter(Boolean)
              .map((data, index) => (
                <div
                  key={index}
                  className={`h-full rounded-full justify-center px-4 py-[2px] ${
                    data?.includes("Urgent Hiring")
                      ? "bg-red-600/80 text-white"
                      : "bg-secondary text-primary"
                  } flex lg:mt-0 mt-1 `}
                >
                  <p className="text-[12px] lg:text-[17px] lg:leading-[28px]">
                    {data}
                  </p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="w-fit mx-auto flex flex-col mb-4 md:mb-6">
          <div className="h-4 w-full bg-gray/30 rounded-lg"></div>
          <div className="flex flex-row gap-12 mt-3">
            <div className="h-4 w-28 bg-gray/30 rounded-lg"></div>
            <div className="h-4 w-28 bg-gray/30 rounded-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleForm;
