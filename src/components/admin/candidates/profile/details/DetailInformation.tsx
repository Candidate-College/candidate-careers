import Information from "./Information";
const data = [
  { title: "University", content: "University Of Indonesia" },
  { title: "Major", content: "Informatics Engineering" },
  { title: "Interest", content: "Lorem ipsum dolor smit lorem ipsum" },
  { title: "University", content: "Lorem ipsum dolor smit lorem ipsum" },
  { title: "University", content: "Lorem ipsum dolor smit lorem ipsum" },
];

export default function DetailInformation() {
  return (
    <div className="bg-primary text-white overflow-hidden rounded-lg">
      <div className="px-5 py-2 bg-secondary">
        <h2 className="text-primary text-[16px] sm:text-[18px]  font-semibold">
          Detail Information
        </h2>
      </div>
      <div>
        {data.map(({ title, content }, index) => {
          return <Information key={index} title={title} content={content} />;
        })}
      </div>
    </div>
  );
}
