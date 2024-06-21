import Image from "next/image";
import React from "react";

const NotFoundPosition = () => {
  return (
    <section className="">
      <Image
        src={"/decoration/no-position.png"}
        alt="Not Position"
        width={500}
        height={500}
      />

      <div className="space-y-3 text-center">
        <h4 className="text-primary font-bold text-base lg:text-2xl">
          No Open Positions at This Time
        </h4>
        <p className="text-[#838282] text-base tracking-[0.4px] md:tracking-normal">
          Feel free to revisit our website later to see our latest openings.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPosition;
