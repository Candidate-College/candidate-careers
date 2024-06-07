import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function Profile() {
  return (
    <div className="flex pl-5 justify-end  w-full xl:pl-10  items-center gap-4">
      <div className="text-[14px]  font-semibold leading-[16px]">
        <h3 className="text-end text-primary font-semibold">Sabina</h3>
        <p className={`text-[#1b4e6b8a] ${poppins.className}`}>
          Human Resources
        </p>
      </div>
      <div className="w-[42px] h-[42px] min-w-[42px] min-h-[42px] xl:w-[55px] xl:h-[55px]  !box-border p-1 xl:p-2 border-gray rounded-full border">
        <Image
          alt="Foto profile"
          className="w-full h-full"
          src={"/logo/logo-cc.png"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
