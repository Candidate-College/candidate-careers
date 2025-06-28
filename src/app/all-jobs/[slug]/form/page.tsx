import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url('/background/form-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full flex flex-col md:justify-center md:items-center"
    >
      <div className="bg-white rounded-t-[20px] md:rounded-[20px] px-4 md:px-10 py-5 md:py-6 min-h-screen md:h-[60%] md:w-[70%] mt-[72px] md:mb-[72px] flex flex-col md:justify-center  gap-9 text-primary">
        {/* Your form content here */}
        <div className="flex flex-col items-center w-full gap-1">
          <Image
            src={`/logo/logo-full-cc.png`}
            width={100}
            height={33}
            alt={`Logo Candidate College`}
            title={`Logo Candidate College`}
            className={`block w-[120px] md:w-[200px] h-fit md:h-[120px]`}
            loading="lazy"
          />
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
            <p className="text-[20px] md:text-3xl md:leading-10 leading-7 font-bold">
              Frontend Developer
            </p>
            <div className="flex justify-between">
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Internship
              </p>
              <p className="bg-secondary px-4 py-1 text-primary rounded-2xl text-xs lg:text-base font-medium mr-4">
                Staff
              </p>

              <p className="bg-[#CB3A31] px-4 py-1 text-white rounded-2xl text-xs lg:text-base font-medium">
                Urgent Hiring
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primary font-bold text-base md:text-xl md:leading-7">
            Fill in your Identity
          </p>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your email address"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your name"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  Domicile<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your city & province"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  University<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your university/school name"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  Major<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your major"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
              <div className="space-y-2 w-full">
                <Label className="text-base font-medium leading-6">
                  Semester<span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter  your semester (Ex: 4)"
                  className="flex w-full h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary pb-2 placeholder:text-sm placeholder:text-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-base font-medium leading-6">
                WhatsApp Number<span className="text-red-500">*</span>
              </Label>
              <div className="flex w-full md:w-[48%] h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary">
                <span className="flex items-center px-3 text-sm text-primary border-r border-primary">
                  +62
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter your WhatsApp number"
                  className="flex-1 px-4 py-2 text-sm text-primary bg-transparent focus:outline-none placeholder:text-primary placeholder:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="flex items-center justify-center h-12 w-32 rounded-[30px] font-semibold bg-secondary text-primary hover:text-secondary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
