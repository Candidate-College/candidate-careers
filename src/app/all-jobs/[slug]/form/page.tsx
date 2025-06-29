"use client";

import { IdentityForm } from "@/components/jobs/form/IdentityForm";
import { SocialMediaForm } from "@/components/jobs/form/SocialMediaForm";
import { ProgressBar } from "@/components/jobs/form/ProgressBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FollowingCCForm } from "@/components/jobs/form/FollowingCCForm";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0); // Track animation direction

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection(1); // Moving forward
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1); // Moving backward
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const transition = {
    x: { type: "spring" as const, stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  // Function to render current step content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <IdentityForm />;
      case 2:
        return <SocialMediaForm />;
      case 3:
        return <FollowingCCForm />;
      default:
        return <IdentityForm />;
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

      {/* Smooth height transition with motion.div */}
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        className="bg-white overflow-hidden rounded-t-[20px] md:rounded-[20px] px-4 md:px-10 py-5 md:py-6 w-full md:w-[70%] mt-[72px] md:mb-[72px] flex flex-col gap-9 text-primary"
      >
        {/* Header content */}
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

        {/* Animated form content */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="w-full"
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
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
      </motion.div>
    </div>
  );
}
