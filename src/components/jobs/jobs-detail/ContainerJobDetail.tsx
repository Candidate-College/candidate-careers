import React from "react";

type TContainer = {
  children: React.ReactNode;
};

const ContainerJobDetail: React.FC<TContainer> = ({ children }) => {
  return (
    <div
      className="mt-6 w-full md:max-w-[1043px] h-full md:rounded-[50px] pt-[42px] pb-8 bg-white"
      style={{
        boxShadow: "0px 2px 20px 0px #00000026",
      }}
    >
      {children}
    </div>
  );
};

export default ContainerJobDetail;
