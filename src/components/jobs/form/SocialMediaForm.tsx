import { FormValues } from "@/interface/form-types";
import { useFormContext } from "react-hook-form";
import { FormField } from "./FormField";

export function SocialMediaForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="space-y-5">
      <p className="text-primary font-bold text-base md:text-xl md:leading-7 mb-2 ml-1">
        Fill in your Social Media Information
      </p>

      {/* SOCIAL MEDIA FIELDS */}
      <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0 ml-1">
        <FormField
          label="Instagram Username"
          name="social_media.instagram_url"
          placeholder="Enter your Instagram username"
          register={register}
          errors={errors.social_media?.instagram_url}
          required
        />
        <FormField
          label="TikTok Username"
          name="social_media.tiktok_url"
          placeholder="Enter your TikTok username"
          register={register}
          errors={errors.social_media?.tiktok_url}
          required
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0 ml-1 pb-1">
        <FormField
          label="X Username"
          name="social_media.x_url"
          placeholder="Enter your X/Twitter username"
          register={register}
          errors={errors.social_media?.x_url}
          required
        />
        <FormField
          label="LinkedIn Account URL"
          name="social_media.linkedin_url"
          placeholder="Enter your LinkedIn account URL"
          register={register}
          errors={errors.social_media?.linkedin_url}
          required
        />
      </div>
    </div>
  );
}
