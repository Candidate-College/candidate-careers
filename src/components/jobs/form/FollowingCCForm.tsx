import { FormValues } from "@/interface/form-types";
import { Label } from "@radix-ui/react-label";
import { ImagePlus } from "lucide-react";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

type ImageFieldKey =
  | "candidateCollegeIg"
  | "mindfulJourneyIg"
  | "candidateCollegeTiktok"
  | "sekolahMenulisIg"
  | "sequoiaIg"
  | "candidateCollegeX";

const inputs: Array<[ImageFieldKey, string, string, string]> = [
  [
    "candidateCollegeIg",
    "@candidate.college",
    "Instagram",
    "https://instagram.com/candidate.college",
  ],
  [
    "mindfulJourneyIg",
    "@mindfuljourney.cc",
    "Instagram",
    "https://instagram.com/jobonyours.cc",
  ],
  [
    "candidateCollegeTiktok",
    "@candidatecollege",
    "Tiktok",
    "https://tiktok.com/@candidatecollege",
  ],
  [
    "sekolahMenulisIg",
    "@sekolahmenulis.cc",
    "Instagram",
    "https://instagram.com/sekolahmenulis.cc",
  ],
  ["sequoiaIg", "@sequoia.cc", "Instagram", "https://instagram.com/sequoia.cc"],
  [
    "candidateCollegeX",
    "@CCollege_Ind",
    "X/Twitter",
    "https://x.com/CCollege_Ind",
  ],
];

export function FollowingCCForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormValues>();
  const watchFields = watch();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {inputs.map(([id, label, socmed, link]) => {
        const file = watchFields?.image?.[id];

        return (
          <div key={id} className="space-y-2 text-primary">
            <Label className="block text-base font-medium">
              Proof of following{" "}
              <Link href={link} className="underline">
                {label}
              </Link>{" "}
              ({socmed}) *
            </Label>

            <label
              htmlFor={id}
              className="flex items-center justify-center w-24 h-24 border-2 border-primary rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition bg-[#B3C4CE1A]/10"
            >
              <ImagePlus className="w-8 h-8 text-gray-400" />
            </label>
            <input
              type="file"
              id={id}
              {...register(`image.${id}`)}
              className="hidden"
            />

            {file && <p>{file.name}</p>}
            {errors.image?.[id] && (
              <p className="text-red-500 text-xs">This field is required.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
