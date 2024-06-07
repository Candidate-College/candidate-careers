import Image from "next/image";

export default function HeaderSidebar() {
  return (
    <section className="w-[142px] h-[80px]  mx-auto ">
      <Image
        width={100}
        className="w-full h-full"
        alt="Logo full candidate college"
        height={100}
        src="/logo/logo-full-cc.png"
      />
    </section>
  );
}
