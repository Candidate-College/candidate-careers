import ContentSidebar from "./ContentSidebar";
import HeaderSidebar from "./HeaderSidebar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Logout } from "./svg";
import useIsOpen from "@/hooks/useIsOpen";

export default function Sidebar() {
  const { isOpen, setIsOpen } = useIsOpen();
  return (
    <aside
      className={`w-full sm:w-[266px] transition-all flex ${
        isOpen && "translate-x-0"
      } -translate-x-[100%] sm:translate-x-0 flex-col overflow-y-auto h-screen fixed inset-y-0 p-4    bg-primary  text-white`}
    >
      <span
        onClick={(e) => setIsOpen()}
        className={`block sm:hidden absolute right-7  w-fit lg:hidden text-2xl  transition-all duration-800 cursor-pointer`}
      >
        {isOpen ? (
          <CloseIcon className="text-secondary" fontSize="inherit" />
        ) : (
          <MenuIcon className="text-secondary" fontSize="inherit" />
        )}
      </span>
      <HeaderSidebar />

      <div className="overflow-y-auto h-full">
        {/* content sidebar */}
        <ul className="flex flex-col gap-3 w-full mt-6">
          <ContentSidebar />
        </ul>
      </div>

      <div className="px-5 pt-20 border-t relative  ">
        <button className="flex justify-center rounded-lg p-2 border w-full gap-2">
          <Logout /> <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
