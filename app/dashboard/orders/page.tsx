import Card from "../components/Card";

function page() {
  const cardTitles = [
    "Total Orders",
    "Total project amount",
    "Total project paid",
    "Total amount left",
    "Total pending Orders",
    "Total Waiting orders",
    "Total working orders",
    "total complete orders",
    "total delivery orders",
    "total cancel orders",
  ];

  return (
    <section className="rounded-xl py-5 px-6">
      <div className="grid grid-cols-4 gap-3 mb-4">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>

      <header>
        <h1>Orders</h1>
        <div>
          <input type="search" placeholder="Search" />
        </div>
      </header>
    </section>
  );
}

export default page;
