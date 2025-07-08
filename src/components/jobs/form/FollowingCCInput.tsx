import { Label } from "@radix-ui/react-label";
import { ImagePlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FieldErrors, useFormContext, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/interface/form-types";

type InputProps = {
  id: keyof FormValues["image"];
  label: string;
  socmed: string;
  link: string;
  readonly previewUrl: string | null;
  readonly register: UseFormRegister<FormValues>;
  readonly errors: FieldErrors<FormValues> | undefined;
  readonly onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly isOptional?: boolean;
  readonly isEdit?: boolean;
};

export function FollowingCCInput({
  id,
  label,
  socmed,
  link,
  previewUrl,
  register,
  errors,
  onFileChange,
  isOptional = false,
  isEdit = false,
}: InputProps) {
  const { ref, ...restRegister } = register(`image.${id}`, {
    onChange: onFileChange,
    validate: (value) => {
      if (isEdit && typeof value === "string") {
        return true;
      }

      if (!value && !isOptional) {
        return "Member image is required";
      }

      if (value instanceof File) {
        if (value.type !== "image/webp") {
          return "Please upload a valid WebP image file";
        }
        if (value.size > 5 * 1024 * 1024) {
          return "File size should not exceed 5MB";
        }
      }

      return true;
    },
  });

  return (
    <div className="space-y-2 text-primary">
      <Label className="block text-base font-medium">
        Proof of following{" "}
        <Link href={link} className="underline" target="_blank">
          {label}
        </Link>{" "}
        ({socmed}) {!isOptional && "*"}
      </Label>

      <label
        htmlFor={id}
        className="flex items-center justify-center w-24 h-24 border-2 border-primary rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition bg-[#B3C4CE1A]/10 overflow-hidden"
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Image preview"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <ImagePlus className="w-8 h-8 text-gray-400" />
        )}
      </label>

      <input
        type="file"
        id={id}
        accept="image/webp"
        ref={ref}
        {...restRegister}
        className="hidden"
      />

      {errors?.image?.[id] && (
        <p className="text-red-500 text-xs">
          {(errors.image?.[id] as any)?.message || "This field is required."}
        </p>
      )}
    </div>
  );
}
