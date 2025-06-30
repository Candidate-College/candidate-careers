import { Input } from "@/components/ui/input";
import { FormValues } from "@/interface/form-types";
import { Label } from "@radix-ui/react-label";
import { Path, UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: Path<FormValues>;
  placeholder: string;
  register: UseFormRegister<FormValues>;
  required?: boolean;
}

export function FormField({
  label,
  name,
  placeholder,
  register,
  required = true,
}: FormFieldProps) {
  return (
    <div className="flex flex-col w-full md:w-[48%] space-y-2">
      <Label htmlFor={name} className="text-base font-medium leading-6">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className="h-14 placeholder:text-sm placeholder:text-primary rounded-md bg-[#B3C4CE1A]/10 border border-primary focus-within:ring-2 focus-within:ring-primary pb-2"
      />
    </div>
  );
}
