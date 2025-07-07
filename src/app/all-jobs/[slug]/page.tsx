"use client";

import Navbar from "@/components/Navbar";
import Button from "@/components/admin/candidates/profile/details/Button";
import BriefCasePrimaryIcon from "@/components/icons/BriefCasePrimaryIcon";
import DotPrimaryIcon from "@/components/icons/DotPrimaryIcon";
import InstagramLogo from "@/components/icons/InstagramLogo";
import LinkedInLogo from "@/components/icons/LinkedInLogo";
import TiktokLogo from "@/components/icons/TiktokLogo";
import TwitterLogo from "@/components/icons/TwitterLogo";
import ContainerJobDetail from "@/components/jobs/jobs-detail/ContainerJobDetail";
import { useEffect, useState } from "react";

const DetailJob = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-white w-full h-full">
      <Navbar position="sticky" />

      <div className="absolute h-[343px] bg-primary w-full -z-50"></div>
      <section className="pt-[72px] pb-[144px] md:pb-[169px] bg-primary flex">
        <div className="text-white h-fit w-full sm:container px-6 sm:px-0 sm:mx-auto xl:max-w-[972px]">
          <h3 className="text-white mb-4 font-bold text-[32px] lg:text-[45px]">
            Front-end Developer
          </h3>
          <div className="flex gap-6 flex-col-reverse md:flex-row">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
              <div className="flex items-center gap-x-2">
                <BriefCasePrimaryIcon fill="#90A3BF" />

                <p className="text-base lg:text-[22px] text-[#90A3BF] font-medium">
                  Departement
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <DotPrimaryIcon fill="#90A3BF" />

                <p className="text-base lg:text-[22px] text-[#90A3BF] font-medium">
                  Web Development
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-y-4">
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Internship
              </p>
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Staff
              </p>

              <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-xs lg:text-base font-medium mr-4">
                Urgent Hiring
              </p>
            </div>
          </div>
          {isMobile && (
            <div className="mt-6 w-full flex justify-center">
              <Button className="flex items-center justify-center w-full h-14 rounded-[30px] font-semibold bg-secondary text-primary">
                Apply Now
              </Button>
            </div>
          )}
        </div>
      </section>
      <div className="w-full flex flex-col justify-center items-center relative bottom-[72px] lg:mt-[96px] lg:bottom-[220px]">
        <ContainerJobDetail>
          <div className="px-9 md:px-14 py-[26px] flex flex-col md:flex-row justify-between gap-20 w-full">
            <div className="w-full md:w-[70%] flex flex-col gap-[42px]">
              <div className="flex flex-col gap-6">
                <p className="text-[28px] leading-7 text-primary font-semibold">
                  Requirements
                </p>
                <div>
                  <ul className="text-base text-[#1F2937] list-disc pl-6">
                    <li>
                      Bachelor&apos;s degree in Computer Science, Information
                      Technology, or a related field.
                    </li>
                    <li>1+ years of experience in front-end development.</li>
                    <li>
                      Proficient in HTML, CSS, and JavaScript. Experience with
                      front-end frameworks like React, Angular, or Vue.js is a
                      plus.
                    </li>
                    <li>Experience with responsive web design principles.</li>
                    <li>
                      Strong understanding of cross-browser compatibility.
                      Experience with API integration.
                    </li>
                    <li>Excellent problem-solving and debugging skills.</li>
                    <li>
                      Ability to work independently and as part of a team.
                    </li>
                    <li>Strong communication and collaboration skills.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[28px] leading-7 text-primary font-semibold">
                  Job Description
                </p>
                <p className="text-base text-[#1F2937] text-justify">
                  As a Front-End Developer, you will be responsible for
                  designing, developing, and maintaining the user interfaces of
                  our web applications. You will work closely with our team of
                  designers and back-end developers to create a seamless user
                  experience.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[28px] leading-7 text-primary font-semibold">
                  Responsibility
                </p>
                <div>
                  <ul className="text-base text-[#1F2937] list-disc pl-6">
                    <li>
                      Translate UI/UX designs into high-quality, maintainable
                      front-end code.
                    </li>
                    <li>
                      Develop and implement new features and enhancements.
                    </li>
                    <li>
                      Optimize web applications for performance and
                      accessibility.
                    </li>
                    <li>Troubleshoot and debug front-end issues.</li>
                    <li>
                      Collaborate with designers and back-end developers to
                      ensure a consistent user experience.
                    </li>
                    <li>
                      Stay up-to-date on the latest front-end technologies.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[28px] leading-7 text-primary font-semibold">
                  Benefits
                </p>
                <div>
                  <ul className="text-base text-[#1F2937] list-disc pl-6">
                    <li>Work from anywhere (WFA).</li>
                    <li>Opportunity to work on cutting-edge technology.</li>
                    <li>
                      Chance to make a real impact on our products and services.
                    </li>
                    <li>
                      Work with a talented and passionate team of developers.
                    </li>
                    <li>Enjoy a flexible and supportive work environment.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-[28px] leading-7 text-primary font-semibold">
                  About the Team
                </p>
                <p className="text-base text-[#1F2937] text-justify">
                  Our front-end development team is a group of talented and
                  passionate individuals who are dedicated to creating
                  high-quality,user-friendly web applications. We are always
                  looking for new ways to improve our products and services, and
                  we are constantly learning and evolving. If you are a creative
                  and problem-solving individual who is passionate about
                  front-end development, we encourage you to apply.
                </p>
                <p className="text-base text-[#1F2937] text-justify">
                  We are a diverse and inclusive team, and we are committed to
                  creating a workplace where everyone feels welcome and
                  respected. We value different perspectives and experiences,
                  and we believe that this diversity makes us a stronger team.
                </p>
              </div>
            </div>
            {!isMobile && (
              <div className="w-full md:w-[30%] flex flex-col gap-6">
                <div className="w-full flex justify-center">
                  <Button className="flex items-center justify-center w-64 h-16 rounded-[30px] font-semibold">
                    Apply Now
                  </Button>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[#374151] text-2xl font-semibold leading-7">
                    Share this listing:
                  </p>
                  <div className="flex justify-between">
                    <div className="bg-secondary p-3 rounded-[25px]">
                      <InstagramLogo />
                    </div>
                    <div className="bg-secondary p-3 rounded-[25px]">
                      <TiktokLogo />
                    </div>
                    <div className="bg-secondary p-3 rounded-[25px]">
                      <TwitterLogo />
                    </div>
                    <div className="bg-secondary p-3 rounded-[25px]">
                      <LinkedInLogo />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ContainerJobDetail>
      </div>
    </main>
  );
};

export default DetailJob;
