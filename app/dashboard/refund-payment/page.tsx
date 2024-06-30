import Card from "../components/Card";

function page() {
  const cardTitles = [
    "Total refund",
    "Total refund amount",
    "Total pending refund",
    "Total sending refund",
    "Total ineligible refund",
  ];

  return (
    <section className="rounded-xl py-5 px-6">
      <div className="grid grid-cols-4  gap-3">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>
    </section>
  );
}

export default page;
