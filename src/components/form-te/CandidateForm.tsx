import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useRouter } from 'next/navigation';
import LoadingBar from 'react-top-loading-bar';
import useFormStore from '@/components/store/formStore';

const CandidateForm: React.FC = () => {
  const { formData, setFormData, nextStep } = useFormStore();
  const { email, name, domicile, university, major, semester, whatsappNumber, instagramAccount } = formData;
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [navigated, setNavigated] = useState(false);

  useEffect(() => {
    setProgress(30);
    if (navigated) {
      setProgress(0);
      setNavigated(false);
    }
  }, [navigated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    
    if (!email) newErrors.email = 'Email is required';
    if (!name) newErrors.name = 'Name is required';
    if (!domicile) newErrors.domicile = 'Domicile is required';
    if (!university) newErrors.university = 'University is required';
    if (!major) newErrors.major = 'Major is required';
    if (!semester) newErrors.semester = 'Semester is required';
    if (!whatsappNumber) newErrors.whatsappNumber = 'WhatsApp Number is required';
    if (!instagramAccount) newErrors.instagramAccount = 'Instagram Account is required';
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setProgress(100); 
      setNavigated(true);
      await router.push('/apply-form/uploadpage');
    }
  };

  return (
    <>
      <LoadingBar
        color="#FFDE59"
        progress={progress}
        height={10}
        className='rounded-full'
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto px-4 py-2 md:py-16 max-w-screen-lg xxsm:mt-32">
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-xl min-h-[800px] max-w-[900px] mx-auto px-2 sm:px-4">
          <div className="flex items-center mb-4 md:mb-6 justify-center mr-3">
            <Image 
              src="/logo/logo-full-cc.png"
              alt="Candidate College Logo"
              width={200} 
              height={40} 
              className="max-w-full h-auto"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center text-slate-700 sm:text-lg">Front-End Developer</h2>
          <div className="flex flex-wrap space-x-2 mb-4 md:mb-6 justify-center">
            <span className="bg-amber-300 text-sm font-medium px-2 md:px-3 py-1 rounded-full text-stone-600 cursor-pointer">Internship</span>
            <span className="bg-amber-300 text-sm font-medium px-2 md:px-3 py-1 rounded-full text-stone-600 cursor-pointer">Staff</span>
            <span className="bg-red-600 text-sm font-medium px-2 md:px-3 py-1 rounded-full text-slate-200 cursor-pointer">Urgent Hiring</span>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-slate-700 sm:text-base">Fill in your identity</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6 sm:grid-cols-1">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" value={email} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.email && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.email}
                </p>}
                <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                    This is a required question.
                </p>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Name <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.name && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.name}
                </p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
              <div>
                <label htmlFor="domicile" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Domicile <span className="text-red-500">*</span></label>
                <input type="text" id="domicile" name="domicile" placeholder="Enter your city & province" value={domicile} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.domicile && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.domicile}
                </p>}
              </div>
              <div>
                <label htmlFor="university" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">University <span className="text-red-500">*</span></label>
                <input type="text" id="university" name="university" placeholder="Enter your university/school name" value={university} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.university && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.university}
                </p>}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-4 md:mb-6">
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Major <span className="text-red-500">*</span></label>
                <input type="text" id="major" name="major" placeholder="Enter your major" value={major} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.major && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.major}
                </p>}
              </div>
              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Semester <span className="text-red-500">*</span></label>
                <input type="number" id="semester" name="semester" placeholder="Enter your semester (Ex: 4)" value={semester} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.semester && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.semester}
                </p>}
                <p className="text-xs text-slate-400 mt-1 md:mt-2">If you are a student or fresh graduate, type &quot; - &quot;</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-6 md:mb-8">
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">WhatsApp Number <span className="text-red-500">*</span></label>
                <div className="flex items-center">
                  <span className="bg-slate-100 px-3 py-2 md:py-3 text-sm text-slate-600 border border-r-0 border-slate-300 rounded-l-lg">+62</span>
                  <input type="tel" id="whatsappNumber" name="whatsappNumber" placeholder="Enter your WhatsApp number" value={whatsappNumber} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-r-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                </div>
                {errors.whatsappNumber && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.whatsappNumber}
                </p>}
                <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  Only numbers allowed
                </p>
              </div>
              <div>
                <label htmlFor="instagramAccount" className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">Instagram Account <span className="text-red-500">*</span></label>
                <input type="text" id="instagramAccount" name="instagramAccount" placeholder="Enter your Instagram username" value={instagramAccount} onChange={handleChange} className="w-full px-2 py-2 md:px-3 md:py-3 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-slate-400" required />
                {errors.instagramAccount && <p className="text-xs text-red-400 mt-1 md:mt-2 flex items-center">
                  <ErrorOutlineOutlinedIcon className="w-3 h-3 mr-1" />
                  {errors.instagramAccount}
                </p>}
              </div>
            </div>
            {Object.keys(errors).length > 0 && (
              <div className="mb-4 text-red-500 text-sm">
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <div className="flex justify-center sm:px-4">
              <button type="submit" className="w-28 bg-amber-400 text-slate-950 opacity-75 p-4 shadow-lg text-sm rounded-full hover:bg-yellow-600 transition duration-300 font-semibold xxsm:mt-4">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CandidateForm;


