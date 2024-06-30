import Card from "../components/Card";

function page() {
  const cardTitles = [
    "Total payment",
    "Total pay amount",
    "Total pending payment",
    "Total accepted payment",
    "Total spam payment",
  ];

  return (
    <section className="rounded-xl py-5 px-6">
      <div className="grid grid-cols-4  gap-3">
        {cardTitles.map((title) => (
          <Card title={title} />
        ))}
      </div>
    </section>
  );
}

export default page;
