import Image from "next/image";
import { Attachment } from "./svg";

export default function Table() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="mt-4 w-full border-separate  border-spacing-x-0 border-spacing-y-1">
        <thead>
          <tr className="text-[14px] font-medium text-gray">
            <td className="pl-4">PROFILE</td>
            <td className="pl-4">DIVISI</td>
            <td className="pl-4">INTEREST</td>
            <td className="pl-4">RESUME</td>
            <td className="pl-4">PORTFOLIO</td>
            <td className="pl-4">DATE</td>
            <td className="w-11"></td>
          </tr>
        </thead>
        <tbody className="text-[13px] text-white ">
          {new Array(10).fill(0).map((_, index) => {
            return (
              <tr
                key={index}
                className="border border-collapse rounded-xl overflow-hidden"
              >
                <td className="px-4 py-2 pl-8 rounded-s-lg bg-primary">
                  <div className="flex gap-2">
                    <Image
                      src="/logo/logo-cc.png"
                      className="w-[27px] object-cover h-[40px]"
                      width={100}
                      height={100}
                      alt="Foto Profile"
                    />
                    <div className="flex flex-col">
                      <span>Esthera Jackson</span>
                      <span className="text-[#D1D5DB]">
                        esthera@simmple.com
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2 bg-primary">
                  <div className="flex flex-col">
                    <span>Staff Division</span>
                    <span className="text-[#D1D5DB]">Talent Management</span>
                  </div>
                </td>
                <td className="bg-primary px-4 py-2 max-w-[200px]">
                  Lorem ipsum dolor sit amet consectetur.
                </td>
                <td className="px-4 py-2 bg-primary">
                  <div className="flex gap-1 text-[#D1D5DB] items-center">
                    See Attachment <Attachment />
                  </div>
                </td>
                <td className="px-4 py-2 bg-primary">
                  <div className="flex gap-1 text-[#D1D5DB]  items-center">
                    See Attachment <Attachment />
                  </div>
                </td>
                <td className="px-4 py-2 bg-primary">14/06/21</td>
                <td className="px-4 py-2 pr-8 bg-primary rounded-e-xl text-center w-20">
                  <button>View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
