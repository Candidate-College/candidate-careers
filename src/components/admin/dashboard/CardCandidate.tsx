// Import Modules
import React from "react";

// Import Icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

// Component
export const CardCandidate = (props: any) => {
  return (
    <div className="bg-primary flex flex-col text-center items-center w-48 mx-5 my-4 p-5 rounded-lg">
      {/* Photo Profile */}
      <div className="flex flex-col w-3/5">
        <Image
          alt={"Image props"}
          src={props.img}
          width={100}
          height={100}
          className="rounded-xl"
          title="Photo Profile Candidaters"
        />
      </div>
      {/* Full Name */}
      <div className="mt-2 text-white font-medium text-base">{props.name}</div>
      {/* Division */}
      <div className="mt-1 text-white font-light text-xs">{props.division}</div>
      {/* Social Media */}
      <div className="mt-3 flex flex-row">
        <a
          href={props.email}
          className="flex justify-center items-center bg-[#FFDE59] text-[#1B4E6B] m-1 p-1.5 rounded-full cursor-pointer"
          title="Email Candidaters"
          target="_blank"
        >
          <EmailOutlinedIcon fontSize="small" />
        </a>
        <a
          href={props.phoneNumber}
          className="flex justify-center items-center bg-[#FFDE59] text-[#1B4E6B] m-1 p-1.5 rounded-full cursor-pointer"
          title="WhatsApp Candidaters"
          target="_blank"
        >
          <WhatsAppIcon fontSize="small" />
        </a>
      </div>
    </div>
  );
};
