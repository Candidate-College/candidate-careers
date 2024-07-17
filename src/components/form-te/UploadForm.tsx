import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomUploadButton from "./CustomUploadButton";
import { useRouter } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import useFormStore from "@/components/store/formStore";
import TitleForm from "./TitleForm";

const UploadForm: React.FC = () => {
  const { formData, setFormData, nextStep } = useFormStore();
  const { portfolioUrl, cv, proofCC, proofSK, proofJourney, proofSequoia } =
    formData;
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [navigated, setNavigated] = useState(false);

  useEffect(() => {
    setProgress(50);
    if (navigated) {
      setProgress(0);
      setNavigated(false);
    }
  }, [navigated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setFormData({ [name]: file });
    } else {
      setFormData({ [name]: value });
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!cv) newErrors.cv = "CV is required";
    if (!portfolioUrl) newErrors.portfolioUrl = "Portfolio URL is required";
    if (!proofCC)
      newErrors.proofCC = "Proof of following @candidate.college is required";
    if (!proofSK)
      newErrors.proofSK = "Proof of following @sekolahmenulis.cc is required";
    if (!proofJourney)
      newErrors.proofJourney =
        "Proof of following @mindfuljourney.cc is required";
    if (!proofSequoia)
      newErrors.proofSequoia = "Proof of following @sequoia.cc is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setProgress(100);
      setNavigated(true);
      await router.push("/apply-form/uploadpage/questionpage");
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
          <div className="flex items-center mb-1 md:mb-6 justify-center">
            <Image
              src="/logo/logo-full-cc.png"
              alt="Candidate College Logo"
              width={200}
              height={40}
              className="max-w-full h-auto"
            />
          </div>
          <TitleForm />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg md:text-xl font-bold mb-4 xxsm:mt-16 md:mb-6 text-slate-700">
              Upload requirements
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
              <div>
                <label
                  htmlFor="cv"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Upload Curriculum Vitae(CV.pdf)
                  <span className="text-red-500">*</span>
                </label>
                <CustomUploadButton
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  preview={cv ? URL.createObjectURL(cv) : null}
                  fileType={cv ? cv.type : null}
                />
              </div>
              <div>
                <label
                  htmlFor="portfolioUrl"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Portfolio URL<span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  placeholder="Enter portfolio URL"
                  value={portfolioUrl}
                  onChange={handleChange}
                  className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
              <div>
                <label
                  htmlFor="proofCC"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Proof of following{" "}
                  <a
                    href="https://www.instagram.com/candidate.college"
                    target="_blank"
                  >
                    @candidate.college
                  </a>{" "}
                  Instagram<span className="text-red-500">*</span>
                </label>
                <CustomUploadButton
                  type="photo"
                  name="proofCC"
                  onChange={handleChange}
                  preview={proofCC ? URL.createObjectURL(proofCC) : null}
                  fileType={proofCC ? proofCC.type : null}
                />
              </div>
              <div>
                <label
                  htmlFor="proofSK"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Proof of following{" "}
                  <a
                    href="https://www.instagram.com/sekolahmenulis.cc"
                    target="_blank"
                  >
                    @sekolahmenulis.cc
                  </a>{" "}
                  Instagram<span className="text-red-500">*</span>
                </label>
                <CustomUploadButton
                  type="photo"
                  name="proofSK"
                  onChange={handleChange}
                  preview={proofSK ? URL.createObjectURL(proofSK) : null}
                  fileType={proofSK ? proofSK.type : null}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
              <div>
                <label
                  htmlFor="proofJourney"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Proof of following{" "}
                  <a
                    href="https://www.instagram.com/mindfuljourney.cc"
                    target="_blank"
                  >
                    @mindfuljourney.cc
                  </a>{" "}
                  Instagram<span className="text-red-500">*</span>
                </label>
                <CustomUploadButton
                  type="photo"
                  name="proofJourney"
                  onChange={handleChange}
                  preview={
                    proofJourney ? URL.createObjectURL(proofJourney) : null
                  }
                  fileType={proofJourney ? proofJourney.type : null}
                />
              </div>
              <div>
                <label
                  htmlFor="proofSequoia"
                  className="block text-sm font-medium text-slate-700 mb-1 md:mb-2 xxsm:mb-5"
                >
                  Proof of following{" "}
                  <a
                    href="https://www.instagram.com/sequoia.cc"
                    target="_blank"
                  >
                    @sequoia.cc
                  </a>{" "}
                  Instagram<span className="text-red-500">*</span>
                </label>
                <CustomUploadButton
                  type="photo"
                  name="proofSequoia"
                  onChange={handleChange}
                  preview={
                    proofSequoia ? URL.createObjectURL(proofSequoia) : null
                  }
                  fileType={proofSequoia ? proofSequoia.type : null}
                />
              </div>
            </div>
            {Object.keys(errors).length > 0 && (
              <div className="mb-4 text-red-500 text-sm">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <div className="flex justify-between sm:px-4">
              <button
                type="button"
                onClick={() => router.push("/apply-form")}
                className="w-28 bg-transparent border text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-primary hover:text-amber-300 transition duration-300 font-semibold xxsm:mt-4"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-28 bg-amber-400 text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-yellow-600 transition duration-300 font-semibold xxsm:mt-4"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadForm;

{
  /* <div className='flex justify-between sm:px-4'>
                <button type='button' onClick={() => router.push('/apply-form')} className='w-28 bg-transparent border text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-primary hover:text-amber-300 transition duration-300 font-semibold xxsm:mt-4'>Previous</button>
                <button type="submit" className="w-28 bg-amber-400 text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-yellow-600 transition duration-300 font-semibold xxsm:mt-4">Continue</button>
            </div> */
}
