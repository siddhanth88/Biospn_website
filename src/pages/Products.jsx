import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { name: "Filter Cartridge", description: "High-quality filter", price: "$50" },
  { name: "Membrane", description: "Durable membrane system", price: "$120" },
];

function Products() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleProducts.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}

export default Products;