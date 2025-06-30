"use client";

import { MultiStepForm } from "@/components/jobs/form/MultiStepForm";
import { ProgressBar } from "@/components/jobs/form/ProgressBar";
import { FormValues } from "@/interface/form-types";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
  const methods = useForm<FormValues>({ mode: "onChange" });
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <FormProvider {...methods}>
      <div
        className="min-h-screen w-full flex flex-col md:justify-center md:items-center"
        style={{
          backgroundImage: `url("/background/form-bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ProgressBar step={step} totalStep={totalSteps} />
        <MultiStepForm step={step} setStep={setStep} totalSteps={totalSteps} />
      </div>
    </FormProvider>
  );
}
