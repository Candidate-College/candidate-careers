import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Admin Dashboard Candidate College - Education Platform for Students in Indonesia",
  description:
    "Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.",
  authors: [
    {
      name: "Web Developer Candidate College",
      url: "https://candidatecollegeind.com",
    },
  ],
  icons: "https://i.postimg.cc/vZMVCm7g/LOGO-CC.png",
  keywords: [
    "College",
    "Kampus",
    "Fasilitas",
    "Students",
    "Student",
    "Mahasiswa",
    "Indonesia",
    "Candidate College",
    "Education System",
    "Education in Indonesia",
    "Candidate College",
    "Event",
    "UTBK",
    "Tes TOEFL",
    "Internship",
    "Magang",
    "Platform Edukasi",
    "Artikel",
    "Programs",
    "Test Hosting",
  ],
  publisher: "Rumah Web",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  referrer: "origin",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c2330" },
    { media: "(prefers-color-scheme: light)", color: "#1B4E6B" },
  ],
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white box-border w-full min-h-screen flex text-black">
      {children}
    </main>
  );
}
