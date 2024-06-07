"use client";

import Sidebar from "@/components/admin/dashboard/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-white box-border lg:block hidden w-full min-h-screen   text-black">
        {/* sidebar */}
        <Sidebar />
        {/* body content */}
        {children}
      </main>
      <main className="lg:hidden flex items-center w-full min-h-screen justify-center">
        <h1 className="text-primary">
          Mobile version is not available now, please open in desktop 😥
        </h1>
      </main>
    </>
  );
}
