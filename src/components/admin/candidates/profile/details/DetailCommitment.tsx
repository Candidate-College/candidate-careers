import Information from "./Information";

const data = [
  { title: "Commitment score", content: "99%" },
  {
    title: "Reason For Commitment Score",
    content: "Lorem ipsum dolor smit lorem ipsum",
  },
];

export default function DetailCommitment() {
  return (
    <div className="bg-primary text-white overflow-hidden rounded-lg">
      <div className="px-5 py-2 bg-secondary">
        <h2 className="text-primary text-[16px] sm:text-[18px]   font-semibold">
          Detail Commitment
        </h2>
      </div>
      <div>
        {data.map(({ title, content }, index) => {
          return <Information key={index} title={title} content={content} />;
        })}{" "}
      </div>
    </div>
  );
}
