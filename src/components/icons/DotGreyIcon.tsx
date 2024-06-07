import React from "react";

const DotGreyIcon: React.FC<any> = ({ size, color }) => {
  return (
    <svg
      className="lg:w-[24px] lg:h-[24px]"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="carbon:dot-mark">
        <path
          id="Vector"
          d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
          fill="#90A3BF"
        />
      </g>
    </svg>
  );
};

export default DotGreyIcon;
