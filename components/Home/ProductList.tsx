import Link from "next/link";

export default function ProductList() {
  const bikes = [
    { id: 1, name: "KTM 390 DUKE", image: "/bike1.png", price: 9999 },
    { id: 2, name: "KTM 890 DUKE", image: "/bike2.png", price: 12999 },
    { id: 3, name: "KTM 1290 SUPER DUKE", image: "/bike3.png", price: 19999 },
  ];

  return (
    <div
      id="product-list"
      className="flex flex-wrap justify-center gap-4 p-4 items-end"
    >
      {bikes.map((bike) => (
        <div key={bike.id} className="card bg-base-200 w-96 shadow-sm">
          <figure>
            <img src={bike.image} alt={bike.name} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">{bike.name}</h2>
              <span className="text-xl">{bike.price}€</span>
            </div>
            <div className="card-actions justify-end">
              <Link
                href={`checkout?product_id=${bike.id}`}
                className="btn btn-success"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
