import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

import Link from "next/link";
import Sidebar from "./dashboard/Sidebar";

import useIsOpen from "@/hooks/useIsOpen";

const Navbar: React.FC<any> = () => {
  //   const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isOpen, setIsOpen } = useIsOpen();

  return (
    <header
      className={`w-full z-50  bg-primary
     fixed lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-b-border`}
    >
      <nav
        className={`lg:mx-auto sm:hidden lg:flex-1 flex flex-row items-center justify-between px-7 py-1 border-b border-b-border lg:border-none h-[10vh] md:h-fit`}
      >
        <Link
          href="/"
          title="Candidate College Home"
          about="Candidate College Home"
          className="block cursor-pointer"
        >
          <Image
            src={`/logo/logo-full-cc.png`}
            width={100}
            height={70}
            alt={`Logo Candidate College`}
            title={`Logo Candidate College`}
            className={`block w-[150px] h-[100px] lg:h-[80px] object-contain cursor-pointer`}
            loading="lazy"
          />
        </Link>
        <span
          onClick={(e) => setIsOpen()}
          className={`block lg:hidden text-2xl  transition-all duration-800 cursor-pointer`}
        >
          {isOpen ? (
            <CloseIcon className="text-secondary" fontSize="inherit" />
          ) : (
            <MenuIcon className="text-secondary" fontSize="inherit" />
          )}
        </span>
      </nav>

      {/* Mobile Menu */}
      <Sidebar />
    </header>
  );
};

export default Navbar;
