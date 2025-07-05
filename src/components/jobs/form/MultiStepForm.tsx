"use client";

import { Button } from "@/components/ui/button";
import { FormValues } from "@/interface/form-types";
import { AnimatePresence, motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { FollowingCCForm } from "./FollowingCCForm";
import { IdentityForm } from "./IdentityForm";
import { JobFormHeader } from "./JobFormHeader";
import { SocialMediaForm } from "./SocialMediaForm";
import { useState } from "react";
import SuccessPage from "./SuccessPage";

type Props = {
  step: number;
  setStep: (val: number) => void;
  totalSteps: number;
};

const slide = {
  enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d < 0 ? 300 : -300, opacity: 0 }),
};

export const MultiStepForm = ({ step, setStep, totalSteps }: Props) => {
  const { handleSubmit, trigger } = useFormContext<FormValues>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dir = step > 1 ? 1 : -1;

  const onSubmit = (data: FormValues) => {
    console.log("🚀 Final Data:", data);
    setIsSubmitted(true); // Mark as submitted
  };

  const next = async () => {
    const valid = await trigger();
    if (!valid) return;
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
      handleSubmit(onSubmit)();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prev = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return <IdentityForm />;
      case 2:
        return <SocialMediaForm />;
      case 3:
        return <FollowingCCForm />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
      className="bg-white overflow-hidden rounded-t-[20px] md:rounded-[20px] px-4 md:px-10 py-5 md:py-6 w-full md:w-[70%] mt-[72px] md:mb-[72px] flex flex-col gap-9 text-primary"
    >
      {step === totalSteps && isSubmitted ? (
        <SuccessPage />
      ) : (
        <>
          <JobFormHeader />
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className={`flex ${
                step > 1 ? "justify-between" : "justify-center"
              } mt-8`}
            >
              {step > 1 && (
                <Button
                  onClick={prev}
                  className="h-12 w-32 rounded-[30px] font-semibold bg-primary text-secondary hover:text-primary hover:bg-secondary"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={next}
                className="h-12 w-32 rounded-[30px] font-semibold bg-secondary text-primary hover:text-secondary"
              >
                {step === totalSteps - 1 ? "Submit" : "Continue"}
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};
