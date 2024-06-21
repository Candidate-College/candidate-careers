import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LifeAtCC = () => {
  return (
    <section className="w-full h-full px-8 bg-white flex flex-col lg:flex-row-reverse gap-10 justify-center relative bottom-[80px] items-center">
      {/* image */}
      <Image
        src={"/decoration/explore-life-at-cc.png"}
        alt="explore-life-at-cc"
        width={350}
        height={350}
      />

      {/* text */}
      <div className="w-full h-full p-[30px] md:p-[48px] lg:w-[36%] bg-[#F8F8F8] rounded-3xl">
        <h2 className="text-primary text-[28px] leading-9 text-center lg:text-start lg:text-[32px] font-bold mb-6">
          Explore Life at CC
        </h2>
        <p className="text-[16px] text-gray lg:text-[20px] leading-6 font-normal tracking-[0.5%] mb-6">
          Our core philosophy is people over process. Our culture has been
          instrumental to our success and has helped us attract and retain
          stunning colleagues, making work here more satisfying.
        </p>
        <Link
          href={"#"}
          className="bg-secondary px-4 py-2 flex flex-row items-center w-fit gap-4 rounded-full"
        >
          <p className="text-primary font-semibold">Read More</p>
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default LifeAtCC;
