import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import useFormStore from "@/components/store/formStore"; // Adjust path as per your project
import TitleForm from "./TitleForm";

const QuestionForm: React.FC = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [navigated, setNavigated] = useState(false);

  useEffect(() => {
    setProgress(80);
    if (navigated) {
      setProgress(0);
      setNavigated(false);
    }
  }, [navigated]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.skills) newErrors.skills = "Skills are required";
    if (!formData.schedule) newErrors.schedule = "Schedule is required";
    if (!formData.commitment) newErrors.commitment = "Commitment is required";
    if (!formData.commitmentReason)
      newErrors.commitmentReason = "Commitment reason is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setProgress(100);
      setNavigated(true);
      await router.push("/apply-form/uploadpage/questionpage/finalpage");
    }
  };

  return (
    <>
      <LoadingBar
        color="#FFDE59"
        progress={progress}
        height={10}
        className="rounded-full"
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto px-4 py-2 md:py-16 max-w-screen-lg xxsm:mt-32">
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-xl min-h-[800px] max-w-[900px] mx-auto">
          <div className="flex items-center mb-4 md:mb-6 justify-center">
            <Image
              src="/logo/logo-full-cc.png"
              alt="Candidate College Logo"
              width={200}
              height={40}
              className="max-w-full h-auto"
            />
          </div>
          {/* REPLACE WITH YOUR TITLE COMPONENT */}
          <TitleForm />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-700 sm:text-base mt-12">
              Fill in your answer for the following questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2"
                >
                  Describe your skills and experiences that related with this
                  position?<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  placeholder="Write your answer"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full h-28 px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 resize-none"
                  required
                />
                {errors.skills && (
                  <p className="text-red-500 text-sm">{errors.skills}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="schedule"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2"
                >
                  What you&apos;ll be busy with and what your schedule for the
                  next few months?<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="schedule"
                  name="schedule"
                  placeholder="Write your answer"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="w-full h-28 px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 resize-none"
                  required
                />
                {errors.schedule && (
                  <p className="text-red-500 text-sm">{errors.schedule}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="commitment"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2"
                >
                  How committed are you to internship at Candidate College?
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex justify-between text-slate-500 p-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label
                      key={num}
                      className="flex flex-col items-center w-full cursor-pointer text-center"
                    >
                      <input
                        type="radio"
                        name="commitment"
                        value={num}
                        checked={formData.commitment === num.toString()}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span
                        className={`w-full py-3 border border-slate-500 rounded-sm ${
                          formData.commitment === num.toString()
                            ? "bg-amber-300 text-slate-700"
                            : "bg-zinc-100 text-gray-700"
                        }`}
                      >
                        {num}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.commitment && (
                  <p className="text-red-500 text-sm">{errors.commitment}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="commitmentReason"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2"
                >
                  According to the number you chose, give your reasons for
                  rating your commitment<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="commitmentReason"
                  name="commitmentReason"
                  placeholder="Write your answer"
                  value={formData.commitmentReason}
                  onChange={handleChange}
                  className="w-full h-28 px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400 resize-none"
                  required
                />
                {errors.commitmentReason && (
                  <p className="text-red-500 text-sm">
                    {errors.commitmentReason}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between sm:px-4">
              <button
                type="button"
                onClick={() => router.push("/apply-form/uploadpage")}
                className="w-28 bg-transparent border text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-primary hover:text-amber-300 transition duration-300 font-semibold xxsm:mt-4"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-28 bg-amber-400 text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-yellow-600 transition duration-300 font-semibold xxsm:mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
