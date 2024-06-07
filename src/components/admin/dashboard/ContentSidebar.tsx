import Link from "next/link";
import { usePathname } from "next/navigation";
import FolderSvg from "./svg/FolderSvg";
import ProfileSvg from "./svg/ProfileSvg";
import ClipboardSvg from "./svg/ClipboardSvg";
import JobSvg from "./svg/JobSvg";

export default function ContentSidebar() {
  const pathname = usePathname();
  const urlPath = [
    {
      path: "/careers/admin/dashboard",
      regex: /^\/careers\/admin\/(dashboard\/profile\/?$|dashboard\/?$|candidates\/(?!profile\/?$))/i,
      icon: (
        <FolderSvg
          stroke={
            pathname.match(/^\/careers\/admin\/(dashboard\/profile\/?$|dashboard\/?$|candidates\/(?!profile\/?$))/i) ||
            pathname === "/careers/admin/dashboard"
              ? "#1B4E6B"
              : "white"
          }
        />
      ),
      title: "Candidate",
    },
    {
      path: "/careers/admin/candidates/profile",
      regex: /^\/careers\/admin\/candidates\/profile\/?/i,
      icon: (
        <ProfileSvg
          stroke={
            pathname.match(/^\/careers\/admin\/candidates\/profile\/?/i) ||
            pathname === "/careers/admin/candidates/profile"
              ? "#1B4E6B"
              : "white"
          }
        />
      ),
      title: "Profile",
    },
    {
      path: "/careers/admin/status",
      regex: /^\/careers\/admin\/status\/?$/i,
      icon: (
        <ClipboardSvg
          stroke={
            pathname.match(/^\/careers\/admin\/status\/?$/i) ||
            pathname === "/careers/admin/dashboard/le" // Assuming this was the intended match for the 'feat/display-division-member-page' branch
              ? "#1B4E6B"
              : "white"
          }
        />
      ),
      title: "Status",
    },
    {
      path: "/careers/admin/job/add",
      icon: (
        <JobSvg 
          stroke={
            pathname === "/careers/admin/job/add" ? "#1B4E6B" : "white"
          }
        />
      ),
      title: "Add job"
    }
  ];

  return urlPath.map(({ path, regex, icon, title }, index) => {
    const isActive = regex ? pathname.match(regex) || pathname === path : pathname === path;
    return (
      <Link
        key={index}
        href={path}
        className={`flex items-center gap-4 cursor-pointer ${
          isActive ? "bg-secondary" : ""
        } px-4 py-3 rounded-3xl`}
      >
        {icon}
        <h2
          className={`text-[14px] font-medium ${
            isActive ? "text-primary" : "text-white"
          } leading-[20px]`}
        >
          {title}
        </h2>
      </Link>
    );
  });
}
