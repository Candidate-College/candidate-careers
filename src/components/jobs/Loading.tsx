import React from "react";

const LoadingListJobs = ({ list = 5 }: { list: number }) => {
  return new Array(list).fill(0).map((_, idx) => (
    <div key={idx} className="flex items-center even:bg-[#F8F8F8] py-6">
      <div className="ml-6 lg:ml-[74px] w-full lg:w-[80%] animate-pulse space-y-6">
        <h3 className="h-4 bg-slate-200 w-40 rounded-full"></h3>
        <div className="flex items-center flex-wrap gap-y-2">
          <p className="h-4 bg-slate-200 w-20 rounded-full mr-4"></p>

          <p className="h-4 bg-slate-200 w-20 rounded-full mr-4"></p>

          <p className="h-4 bg-slate-200 w-10 rounded-full mr-4"></p>
          <p className="h-4 bg-slate-200 w-10 rounded-full mr-4"></p>

          <p className="h-4 bg-slate-200 w-14 rounded-full mr-4"></p>
        </div>
      </div>

      <div className="hidden lg:block">
        <p className="h-4 bg-slate-200 w-5 rounded-full mr-4"></p>
      </div>
    </div>
  ));
};

export default LoadingListJobs;
