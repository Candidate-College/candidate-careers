"use client";

import { useForm, useFormContext } from "react-hook-form";
import { FollowingCCInput } from "./FollowingCCInput";
import { FormValues } from "@/interface/form-types";
import React, { useEffect, useState } from "react";

const inputs: Array<[keyof FormValues["image"], string, string, string]> = [
  [
    "proof_cc_ig_url",
    "@candidate.college",
    "Instagram",
    "https://instagram.com/candidate.college",
  ],
  [
    "proof_mj_ig_url",
    "@mindfuljourney.cc",
    "Instagram",
    "https://instagram.com/jobonyours.cc",
  ],
  [
    "proof_cc_tiktok_url",
    "@candidatecollege",
    "Tiktok",
    "https://tiktok.com/@candidatecollege",
  ],
  [
    "proof_sm_ig_url",
    "@sekolahmenulis.cc",
    "Instagram",
    "https://instagram.com/sekolahmenulis.cc",
  ],
  [
    "proof_sequioa_ig_url",
    "@sequoia.cc",
    "Instagram",
    "https://instagram.com/sequoia.cc",
  ],
  [
    "proof_cc_x_url",
    "@CCollege_Ind",
    "X/Twitter",
    "https://x.com/CCollege_Ind",
  ],
];

export function FollowingCCForm() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  // Track preview URLs for each image field
  const [previewUrls, setPreviewUrls] = useState<
    Partial<Record<keyof FormValues["image"], string>>
  >({});

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: keyof FormValues["image"]
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.type !== "image/webp" || file.size > 5 * 1024 * 1024) {
        event.target.value = "";
        return;
      }

      setValue(`image.${id}`, file, {
        shouldDirty: true,
        shouldValidate: true,
      });

      const objectUrl = URL.createObjectURL(file);
      setPreviewUrls((prev) => ({ ...prev, [id]: objectUrl }));
      console.log(objectUrl);
    } else {
      setValue(`image.${id}`, undefined, {
        shouldDirty: true,
        shouldValidate: true,
      });
      setPreviewUrls((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  // Clean up ObjectURLs
  useEffect(() => {
    return () => {
      Object.values(previewUrls).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {inputs.map(([id, label, socmed, link]) => (
        <FollowingCCInput
          key={id}
          id={id}
          label={label}
          socmed={socmed}
          link={link}
          previewUrl={previewUrls[id] || null}
          register={register}
          errors={errors.image?.[id]}
          onFileChange={(e) => handleFileChange(e, id)}
        />
      ))}
    </div>
  );
}
