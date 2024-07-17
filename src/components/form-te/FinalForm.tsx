import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import useFormStore from "../store/formStore";
import axios from "axios";

const FinalForm: React.FC = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const { formData, currentStep } = useFormStore();

  const localData = localStorage.getItem("vacancyDetail");
  const vacancyDetail = JSON.parse(localData!);

  const sendFormDataToBackend = async () => {
    try {
      const formDataSend = new FormData();
      formDataSend.append("email", formData.email);
      formDataSend.append("full_name", formData.name);
      formDataSend.append("university", formData.university);
      formDataSend.append("major", formData.major);
      formDataSend.append("instagram", formData.instagramAccount);
      formDataSend.append("whatsapp", formData.whatsappNumber);
      formDataSend.append("cv", formData.cv!);
      formDataSend.append("portfolio", formData.portfolioUrl);
      formDataSend.append("divisionID", ""); // Replace with actual value if needed
      formDataSend.append("departmentId", ""); // Replace with actual value if needed
      formDataSend.append("reason", ""); // Replace with actual value if needed
      formDataSend.append("leadership_experience", ""); // Replace with actual value if needed
      formDataSend.append("skill_experience", formData.skills);
      formDataSend.append("busyness", formData.schedule);
      formDataSend.append("commitment_value", formData.commitment);
      formDataSend.append("reason_commitment_value", formData.commitmentReason);
      formDataSend.append("is_available_for_unpaid", ""); // Replace with actual value if needed

      await axios.post(
        "https://careers.candidatecollege.org/api/divisions",
        formDataSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application");
    }
  };

  useEffect(() => {
    setProgress(100);
    if (navigated) {
      setProgress(0);
      setNavigated(false);
    }
    console.log(formData);
  }, [navigated, currentStep, formData]);

  const handleNavigation = () => {
    setProgress(100);
    setNavigated(true);
    router.push("/");
  };

  useEffect(() => {
    sendFormDataToBackend();
  }, []);

  return (
    <>
      <LoadingBar
        color="#FFDE59"
        progress={progress}
        height={10}
        className="rounded-full"
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto px-4 py-2 md:py-16 max-w-screen-lg xxsm:mt-5">
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-xl min-h-[200px] max-w-[900px] mx-auto xxsm:min-h-[700px]">
          <div className="flex items-center mb-4 md:mb-6 justify-center">
            <Image
              src="/logo/logo-full-cc.png"
              alt="Candidate College Logo"
              width={200}
              height={40}
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Image
              src="/form/successAnimationForm.gif"
              alt="icon"
              width={300}
              height={120}
              className="max-w-full h-auto"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center text-slate-700 sm:text-lg">
            Awesome! Your application is in!
          </h2>
          <p className="text-center text-slate-600 mb-6">
            Thanks for applying to be our {vacancyDetail.name}! We&apos;ll be in
            touch soon.
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleNavigation}
              className="w-32 bg-amber-400 text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover transition duration-300 font-semibold xxsm"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
