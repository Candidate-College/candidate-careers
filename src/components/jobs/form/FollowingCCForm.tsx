import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

type FormValues = {
  candidateCollegeIg: FileList;
  sekolahMenulisIg: FileList;
  mindfulJourneyIg: FileList;
  sequoiaIg: FileList;
  candidateCollegeTiktok: FileList;
  candidateCollegeX: FileList;
};

export function FollowingCCForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const watchFields = watch();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // Handle your submission logic here
  };

  const renderFileInput = (
    id: keyof FormValues,
    label: string,
    required = true
  ) => {
    const file = watchFields[id]?.[0];
    return (
      <div className="space-y-2">
        <Label className="block text-sm font-medium text-gray-700">
          Proof of following <span className="underline">{label}</span>*
        </Label>

        <label
          htmlFor={id}
          className="flex items-center justify-center w-24 h-24 border-2 border-primary rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition bg-[#B3C4CE1A]/10"
        >
          <ImagePlus className="w-8 h-8 text-gray-400" />
        </label>

        <input
          type="file"
          accept="image/*"
          id={id}
          {...register(id, { required })}
          className="hidden "
        />

        {file && (
          <p className="text-sm text-gray-600 mt-1 truncate max-w-xs">
            {file.name}
          </p>
        )}

        {errors[id] && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}
      </div>
    );
  };

  return (
    <>
      <p className="text-primary font-bold text-base md:text-xl md:leading-7 mb-6">
        Upload proof of following Candidate College social medias
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Column 1 */}
        <div className="flex flex-col space-y-5">
          {renderFileInput(
            "candidateCollegeIg",
            "@candidate.college Instagram"
          )}
          {renderFileInput("mindfulJourneyIg", "@mindfuljourney.cc Instagram")}
          {renderFileInput(
            "candidateCollegeTiktok",
            "@candidatecollege TikTok"
          )}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-5">
          {renderFileInput("sekolahMenulisIg", "@sekolahmenulis.cc Instagram")}
          {renderFileInput("sequoiaIg", "@sequoia.cc Instagram")}
          {renderFileInput("candidateCollegeX", "@CCollege_Ind X/Twitter")}
        </div>
      </form>
    </>
  );
}
