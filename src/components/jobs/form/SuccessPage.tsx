import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SuccessVideo } from "@/components/icons/SuccessVideo";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/logo/logo-full-cc.png"
          width={200}
          height={120}
          alt="Logo Candidate College"
          className="block w-[120px] md:w-[200px] h-fit md:h-[120px]"
          loading="lazy"
        />
        <SuccessVideo />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl text-primary font-bold leading-8">
          Awesome! Your application is in!
        </p>
        <p className="text-[#838282] leading-6">
          Thanks for applying to be our Brand Ambassador! We&apos;ll be in touch
          soon.
        </p>
      </div>
      <div className="flex items-center">
        <Button className="h-12 w-32 rounded-[30px] font-semibold bg-secondary text-primary hover:text-secondary hover:bg-primary">
          <Link href={"/all-jobs"}>Back To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
