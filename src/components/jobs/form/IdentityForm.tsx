import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { FormValues, FormField } from "./FormField";

export function IdentityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    // Handle register logic here
  };

  return (
    <>
      <p className="text-primary font-bold text-base md:text-xl md:leading-7">
        Fill in your Identity
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
          <FormField
            label="Email"
            name="email"
            placeholder="Enter your email address"
            register={register}
          />
          <FormField
            label="Name"
            name="name"
            placeholder="Enter your name"
            register={register}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
          <FormField
            label="Domicile"
            name="domicile"
            placeholder="Enter your city & province"
            register={register}
          />
          <FormField
            label="University"
            name="university"
            placeholder="Enter your university/school name"
            register={register}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center w-full md:gap-x-9 gap-y-5 md:gap-y-0">
          <FormField
            label="Major"
            name="major"
            placeholder="Enter your major"
            register={register}
          />
          <FormField
            label="Semester"
            name="semester"
            placeholder="Enter your semester (Ex: 4)"
            register={register}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-medium leading-6">
            WhatsApp Number<span className="text-red-500">*</span>
          </Label>
          <div className="flex w-full md:w-[48%] h-14 bg-[#B3C4CE1A]/10 rounded-md overflow-hidden border border-primary focus-within:ring-2 focus-within:ring-primary">
            <span className="flex items-center px-3 text-sm text-primary border-r border-primary">
              +62
            </span>
            <input
              {...register("whatsapp", { required: true })}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter your WhatsApp number"
              className="flex-1 px-4 py-2 text-sm text-primary bg-transparent focus:outline-none placeholder:text-primary placeholder:text-sm"
            />
          </div>
        </div>

        {Object.keys(errors).length > 0 && (
          <p className="text-red-500 text-sm">⚠️ All fields are required.</p>
        )}
      </form>
    </>
  );
}
