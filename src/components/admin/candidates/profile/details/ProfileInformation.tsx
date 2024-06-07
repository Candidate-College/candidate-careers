import Image from "next/image";
import Button from "./Button";
import Detail from "./Detail";

export default function ProfileInformation() {
  return (
    <div className="w-full lg:w-2/6 bg-primary py-7 sm:py-10 rounded-lg">
      <div className="px-5 sm:px-7">
        <Image
          width={100}
          height={100}
          className="w-[91px] h-[136px]   mx-auto   object-cover"
          alt="Profile"
          src="/logo/logo-cc.png"
        />
        <h2 className="font-semibold text-center text-[24px] sm:text-[18px]  ">
          Esthera Jackson
        </h2>
        <p className="text-center sm:text-[11px] text-[14px]  ">
          Talent Management
        </p>

        <Button className="w-full mt-8 sm:mt-6">Accept</Button>
      </div>
      <div className="px-7 sm:px-5">
        <Detail className="mt-8" />
      </div>
    </div>
  );
}
