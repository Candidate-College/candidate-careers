// components/SocialMediaForm.tsx
import { useForm } from "react-hook-form";
import { FormField, FormValues } from "./FormField";

export function SocialMediaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <p className="text-primary font-bold text-base md:text-xl md:leading-7">
        Fill in your Social Media Information
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* SOCIAL MEDIA FIELDS */}
        <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
          <FormField
            label="Instagram Username"
            name="instagram"
            placeholder="Enter your Instagram username"
            register={register}
            required
          />
          <FormField
            label="TikTok Username"
            name="tiktok"
            placeholder="Enter your TikTok username"
            register={register}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
          <FormField
            label="X Username"
            name="x"
            placeholder="Enter your X/Twitter username"
            register={register}
            required
          />
          <FormField
            label="LinkedIn Account URL"
            name="linkedin"
            placeholder="Enter your LinkedIn account URL"
            register={register}
            required
          />
        </div>

        {/* OPTIONAL: DISPLAY ERROR FOR DEMO */}
        {Object.keys(errors).length > 0 && (
          <p className="text-red-500 text-sm">⚠️ All fields are required.</p>
        )}
      </form>
    </>
  );
}
