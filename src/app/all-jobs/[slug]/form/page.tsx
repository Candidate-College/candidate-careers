"use client";

import { FormStep1 } from "@/components/jobs/form/FormStep1";
import { FormStep2 } from "@/components/jobs/form/FormStep2";
import { ProgressBar } from "@/components/jobs/form/ProgressBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";
export default function Page() {
  const totalSteps = 3;
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/background/form-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full flex flex-col md:justify-center md:items-center"
    >
      <ProgressBar step={step} totalStep={totalSteps} />

      <div className="bg-white rounded-t-[20px] md:rounded-[20px] px-4 md:px-10 py-5 md:py-6 min-h-screen md:h-[10%] md:w-[70%] mt-[72px] md:mb-[72px] flex flex-col md:justify-center  gap-9 text-primary">
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
          {step === 1 && <FormStep1 />}
          {step === 2 && <FormStep2 />}

          <div
            className={`flex ${
              step > 1 ? "justify-between" : "justify-center"
            } mt-8`}
          >
            {step > 1 && (
              <Button
                className="flex items-center justify-center h-12 w-32 rounded-[30px] font-semibold bg-primary text-secondary hover:text-primary hover:bg-secondary"
                onClick={prevStep}
              >
                Back
              </Button>
            )}
            <Button
              className="flex items-center justify-center h-12 w-32 rounded-[30px] font-semibold bg-secondary text-primary hover:text-secondary"
              onClick={nextStep}
            >
              {step === totalSteps ? "Submit" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
