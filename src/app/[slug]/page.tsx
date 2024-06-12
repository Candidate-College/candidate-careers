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
import { requirementsData, responsibilityData, benefitsData } from "@/data/descAndFormData";

const Detail = () => {

  return (
    <main className="w-full bg-white  overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center lg:items-start relative h-fit md:h-screen overflow-hidden">
        <div className="flex flex-col items-start lg:ml-[176px]">
          <h1 className="text-[32px] lg:text-[45px] font-bold text-center text-white">
            Front-end Developer
          </h1>

          <div className="flex flex-col-reverse gap-2 mt-2 lg:flex-row  lg:gap-6 lg:items-center lg: lg:mt-6">
            <div className="h-full  flex mt-1">
              <BriefCaseGreyIcon />
              <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
                Department
              </p>
            </div>

            <div className="h-full flex mt-1">
              <DotGreyIcon />
              <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
                Web Development
              </p>
            </div>

            <div className="flex gap-2 lg:gap-4">
              {/* hardcoded Roles data */}
              {["Internship", "Staff", "Urgent Hiring"].map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`h-full rounded-full justify-center px-4 py-[2px] ${
                        data.includes("Urgent Hiring")
                          ? "bg-red-600/80 text-white"
                          : "bg-secondary text-primary"
                      } flex lg:mt-0 mt-1 `}>
                      <p className="text-[12px] lg:text-[17px] lg:leading-[28px]  ">
                        {data}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <button className="mt-10 rounded-[50px] px-[35px] py-3 w-full h-full bg-secondary flex items-center justify-center text-primary lg:hidden">
            <a href="#applyForm">Apply Now</a>
            <div className="ml-2 self-center">
              <BlackCaretIcon />
            </div>
          </button>
        </div>
      </section>

      {/* Detail position */}
      <section className="w-full py-[80px] relative lg:mt-[96px] lg:bottom-[400px] lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-around  w-full items-start px-6 shadow-none lg:shadow-xl  bg-white lg:rounded-[50px]  lg:ml-[120px] lg:mr-[120px] lg:pt-[72px]  lg:pb-[72px] lg:px-[68px]">
          <div className="flex flex-col gap-y-9 lg:w-[70%] ">
            {/* job requirements */}
            <div className="flex flex-col w-full items-start">
              <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
                Requirements
              </h2>

              <ul className="list-disc w-full px-5 text-primary text-[14px]  font-normal text-justify">
                {/* hardcoded requirements data */}
                {requirementsData.map((data, index) => {
                  return (
                    <li className="leading-relaxed max-w-2xl text-[17px]" key={index}>
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* end of job requirements */}

            {/* job description */}
            <div className="flex flex-col w-full items-start ">
              <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
                Job Description
              </h2>

              <p className=" text-primary w-full  leading-relaxed  font-normal text-justify  max-w-2xl text-[17px]">
                As a Front-End Developer, you will be responsible for designing,
                developing, and maintaining the user interfaces of our web
                applications. You will work closely with our team of designers
                and back-end developers to create a seamless user experience.
              </p>
            </div>
            {/* end of job description */}

            {/* job Responsibility */}
            <div className="flex flex-col w-full items-start ">
              <h2 className="text-[24px] text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
                Responsibility
              </h2>

              <ul className="list-disc w-full px-5 text-primary text-[14px]  font-normal text-justify">
                {/* hardcoded requirements data */}
                {responsibilityData
                  .map((data, index) => {
                    return (
                      <li className="leading-relaxed max-w-2xl text-[17px]" key={index}>
                        {data}
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* end of job Responsibility */}

            {/* job benefits */}
            <div className="flex flex-col w-full items-start">
              <h2 className="text-[24px] mb-6  text-primary leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                Benefits
              </h2>

              <ul className="list-disc w-full px-5 text-primary text-[14px]  font-normal text-justify">
                {/* hardcoded requirements data */}
                {benefitsData
                  .map((data, index) => {
                    return (
                      <li className="leading-relaxed max-w-2xl text-[17px]" key={index}>
                        {data}
                      </li>
                    );
                  })}
              </ul>
            </div>
            {/* end of job benefits */}

            {/* about the team */}
            <div className="flex flex-col w-full items-start ">
              <h2 className="text-[24px]  leading-[32px] text-primary lg:text-[28px] lg:leading-[36px] font-semibold mb-6">
                About the team
              </h2>

              <p className="mt-4 w-full leading-relaxed max-w-2xl text-[17px] text-primary lg:text-[16px] lg:leading-[24px] font-normal text-justify">
                Our front-end development team is a group of talented and
                passionate individuals who are dedicated to creating
                high-quality,user-friendly web applications. We are always
                looking for new ways to improve our products and services, and
                we are constantly learning and evolving. If you are a creative
                and problem-solving individual who is passionate about front-end
                development, we encourage you to apply.
                <br />
                <br />
                We are a diverse and inclusive team, and we are committed to
                creating a workplace where everyone feels welcome and respected.
                We value different perspectives and experiences, and we believe
                that this diversity makes us a stronger team.
              </p>
            </div>
            {/* end of about the team */}

            {/* share the listing mobile */}
            <div className="flex flex-col w-full items-start mt-4 gap-3 lg:hidden">
              <h3 className="text-[16px] text-primary leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
                Share the listing:
              </h3>

              <div className="flex gap-[14px] mt-2 mb-6 lg:hidden">
                {/* dribble logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <DribbbleLogo />
                </div>
                {/* end of dribble logo */}

                {/* behance logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <BehanceLogo />
                </div>
                {/* end of behance logo */}

                {/* instagram logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <InstagramLogo />
                </div>
                {/* end of instagram logo */}

                {/* linkedin logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <LinkedInLogo />
                </div>
                {/* end of linkedin logo */}
              </div>
            </div>
            {/* end of share the listing mobile */}
          </div>

          <div className="flex flex-col">
            <button className="mt-10 rounded-[50px] drop-shadow-xl text-lg px-20 py-4 font-bold h-full text-primary bg-secondary items-center justify-center hidden lg:flex w-max">
              <a href="#applyForm">Apply Now</a>
            </button>

            {/* share the listing desktop */}
            <div className="w-full gap-2 items-start mt-6 hidden lg:flex lg:flex-col">
              <h3 className="text-[16px] text-primary leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
                Share the listing:
              </h3>

              <div className="gap-[14px] mt-2 mb-6 hidden lg:flex">
                {/* dribble logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <DribbbleLogo />
                </div>
                {/* end of dribble logo */}

                {/* behance logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <BehanceLogo />
                </div>
                {/* end of behance logo */}

                {/* instagram logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <InstagramLogo />
                </div>
                {/* end of instagram logo */}

                {/* linkedin logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <LinkedInLogo />
                </div>
                {/* end of linkedin logo */}
              </div>
            </div>
            {/* end of share the listing desktop */}
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
