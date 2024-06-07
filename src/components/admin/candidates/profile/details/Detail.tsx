import DetailInfo from "./DetailInfo";

const dummy = [
  { title: "Email", content: "esthera@simmmple.com" },
  { title: "Phone", content: "+6282366106230" },
  { title: "Linkedin", content: "https://www.linkedin.com/in/esthera/" },
  { title: "Instagram", content: "https://instagram.com/esthera" },
];

export default function Detail({ className }: { className?: string }) {
  return (
    <div className={className}>
      {dummy.map(({ title, content }, index) => {
        return <DetailInfo key={index} title={title} content={content} />;
      })}
    </div>
  );
}
