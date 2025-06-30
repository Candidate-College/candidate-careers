import Image from "next/image";

export const JobFormHeader = () => {
  return (
    <div className="flex flex-col items-center w-full gap-1">
      <Image
        src="/logo/logo-full-cc.png"
        width={200}
        height={120}
        alt="Logo Candidate College"
        className="block w-[120px] md:w-[200px] h-fit md:h-[120px]"
        loading="lazy"
      />
      <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
        <p className="text-[20px] md:text-3xl md:leading-10 leading-7 font-bold">
          Frontend Developer
        </p>
        <div className="flex justify-between flex-wrap gap-2">
          <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium">
            Internship
          </p>
          <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium">
            Staff
          </p>
          <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-xs lg:text-base font-medium">
            Urgent Hiring
          </p>
        </div>
      </div>
    </div>
  );
};
