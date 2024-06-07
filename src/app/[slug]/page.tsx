"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DribbbleLogo from "@/components/icons/DribbbleLogo";
import BehanceLogo from "@/components/icons/BehanceLogo";
import InstagramLogo from "@/components/icons/InstagramLogo";
import LinkedInLogo from "@/components/icons/LinkedInLogo";
import RightArrowWhiteIcon from "@/components/icons/RightArrowWhiteIcon";
import BriefCaseGreyIcon from "@/components/icons/BriefCaseGreyIcon";
import DotGreyIcon from "@/components/icons/DotGreyIcon";
import BlackCaretIcon from "@/components/icons/BlackCaretIcon";

const Detail = () => {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center lg:items-start relative h-fit md:h-screen overflow-hidden">
        <div className="flex flex-col items-start lg:ml-[176px]">
          <h1 className="text-[32px] lg:text-[45px] leading-[40px] lg:leading-[52px] font-bold text-center text-white">
            Front-end Developer
          </h1>

          <div className="lg:flex lg:gap-6 lg:items-center lg:mt-6">
            <p className="bg-secondary w-[90px] px-2 py-1 text-primary rounded-2xl text-[12px] mt-6 text-center lg:hidden">
              Internship
            </p>

            <div className="h-full flex mt-1">
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

            <p className="bg-secondary w-[90px] px-2 py-1 text-primary rounded-2xl text-[12px] lg:text-[14px] text-center hidden lg:block">
              Internship
            </p>
          </div>

          <button className="mt-10 rounded-[50px] px-[35px] py-3 w-full h-full bg-secondary flex items-center justify-center lg:hidden">
            <a href="#applyForm">Apply Now</a>
            <div className="ml-2 self-center">
              <BlackCaretIcon />
            </div>
          </button>
        </div>
      </section>

      {/* Detail position */}
      <section className="w-full py-[80px] relative lg:mt-[96px] lg:bottom-[400px] lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-[92px] w-full items-start px-6 bg-white lg:rounded-[50px]  lg:ml-[120px] lg:mr-[120px] lg:pt-[72px] lg:px-[68px]">
          <div className="flex flex-col lg:w-[80%]">
            {/* about the team */}
            <div className="flex flex-col w-full items-start">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                About the team
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-normal text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                corporis, nemo minus iure aliquid animi temporibus fugiat,
                exercitationem voluptatibus facilis debitis, perspiciatis porro
                doloribus dolores.
              </p>
            </div>
            {/* end of about the team */}

            {/* job description */}
            <div className="flex flex-col w-full items-start mt-6">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                Job Description
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] font-normal text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                odit, ipsam sint explicabo sed totam eligendi expedita, placeat,
                minus dicta iure laborum pariatur ratione libero!
              </p>
            </div>
            {/* end of job description */}

            {/* job requirements */}
            <div className="flex flex-col w-full items-start mt-6">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                Job Requirements
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] font-normal text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                harum esse amet atque assumenda laborum accusamus quibusdam
                exercitationem et pariatur impedit, quidem, repellendus corporis
                maxime odio ullam tenetur temporibus! Molestias inventore
                voluptatum cumque, nemo sint sit ad commodi rerum facere
                reprehenderit! Odio neque maxime esse rem iure nam doloribus
                odit nihil magnam accusantium. Inventore voluptatem quas dicta
                dolorum! Tempore nostrum doloribus sit recusandae reiciendis hic
                obcaecati est rerum dicta molestiae delectus, perspiciatis
                dignissimos aliquam corrupti!
              </p>
            </div>
            {/* end of job requirements */}

            {/* share the listing mobile */}
            <div className="flex flex-col w-full items-start mt-4 lg:hidden">
              <h3 className="text-[16px] leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
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

            {/* form */}
            <div className="flex flex-col w-full items-start mt-12">
              <form
                action=""
                className="flex flex-col w-full gap-4"
                id="applyForm"
              >
                <div className="flex flex-col lg:flex-row lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <p className="text-[16px] leading-[24px] font-medium">
                      Resume
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-2">
                      (.pdf, .doc, .docx, .txt)
                    </p>
                    <label
                      htmlFor="resume"
                      className="px-4 py-3 border-[3px] border-[#1B4E6B] w-max text-center"
                    >
                      UPLOAD RESUME
                    </label>
                    <input
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                        width: 0,
                        height: 0,
                      }}
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="file"
                      name="resume"
                      id="resume"
                      placeholder="Upload Resume"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full mt-4">
                    <p className="text-[16px] leading-[24px] font-medium">
                      Additional file
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-2">
                      Upload supplemental documents max 5MB each
                    </p>
                    <label
                      htmlFor="resume"
                      className="px-4 py-3 border-[3px] border-[#1B4E6B] w-max text-center"
                    >
                      UPLOAD DOCUMENTS
                    </label>
                    <input
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                        width: 0,
                        height: 0,
                      }}
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="file"
                      name="resume"
                      id="resume"
                      placeholder="Upload Resume"
                    />
                  </div>
                </div>

                <div>
                  <button className="w-max bg-primary px-4 py-3 rounded-[2px] text-[14px] leading-[20px] flex text-white justify-center items-center mt-6 lg:mt-[42px]">
                    SUBMIT APPLICATION
                    <div className="ml-2 self-center">
                      <RightArrowWhiteIcon />
                    </div>
                  </button>
                </div>
              </form>
            </div>
            {/* end of form */}
          </div>

          <div className="flex flex-col">
            <button className="mt-10 rounded-[50px] px-[35px] py-3 h-full bg-secondary items-center justify-center hidden lg:flex w-max">
              <a href="#applyForm">Apply Now</a>
              <div className="ml-2 self-center">
                <BlackCaretIcon />
              </div>
            </button>

            {/* share the listing desktop */}
            <div className="w-full items-start mt-6 hidden lg:flex lg:flex-col">
              <h3 className="text-[16px] leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
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
