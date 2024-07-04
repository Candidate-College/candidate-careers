"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DribbbleLogo from "@/components/icons/DribbbleLogo";
import BehanceLogo from "@/components/icons/BehanceLogo";
import InstagramLogo from "@/components/icons/InstagramLogo";
import LinkedInLogo from "@/components/icons/LinkedInLogo";
import BriefCaseGreyIcon from "@/components/icons/BriefCaseGreyIcon";
import DotGreyIcon from "@/components/icons/DotGreyIcon";
import BlackCaretIcon from "@/components/icons/BlackCaretIcon";
import {
  requirementsData,
  responsibilityData,
  benefitsData,
} from "@/data/descAndFormData";
import { useEffect, useState } from "react";
import axios from "axios";
import VacancyHero from "@/components/main-page/vacancy-detail/VacancyHero";
import VacancyPositionDetail from "@/components/main-page/vacancy-detail/VacancyPositionDetail";
import Image from "next/image";

export interface VacancyDetail {
  slug: string;
  name: string;
  requirements: string;
  description: string;
  responsibilities: string;
  benefits: string;
  about_the_team: string;
  type: string;
  is_urgent: number;
  open_registration_date: string;
  closed_registration_date: string;
  created_at: string;
  updated_at: string;
  department: string;
  division: string;
  position: string;
}

const Detail = ({ params }: any) => {
  const [vacancyDetail, setVacancyDetail] = useState<VacancyDetail | null>(
    null
  );
  const url = "frontend-developer-2024-batch-4";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://careers.candidatecollege.org/api/vacancies/${params.slug}`
        );
        console.log("Fetched Data:", response.data);
        setVacancyDetail(response.data.data);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-full bg-white  overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      {vacancyDetail && <VacancyHero vacancyDetail={vacancyDetail} />}

      {/* Detail position */}
      {vacancyDetail && <VacancyPositionDetail vacancyDetail={vacancyDetail} />}

      {vacancyDetail === null && (
        <section className="w-full pt-[40px] py-[70px] relative mt-[96px] lg:flex lg:items-center lg:justify-center">
          <div className="px-6 shadow-none lg:shadow-xl bg-white lg:rounded-[50px] lg:ml-[120px] lg:mr-[120px] lg:pt-[72px]  lg:pb-[72px] lg:px-[68px]">
            <Image
              src={"/decoration/no-position.png"}
              alt="no position"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center mx-auto text-center text-primary">
              <h1 className="font-bold text-3xl md:text-4xl mb-4">
                No Open Positions at This Time
              </h1>
              <p className="md:text-lg">
                Feel free to revisit our website later to see our latest
                openings.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
