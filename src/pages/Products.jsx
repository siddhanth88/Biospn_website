import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "HiPurity Water System",
    description: "High-quality purified water systems for pharma and biotech industries.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Cleanroom Equipment",
    description: "Reliable, cutting-edge cleanroom equipment for controlled environments.",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Filtration Unit",
    description: "Advanced filtration units designed for maximum efficiency and safety.",
    image: "/images/product3.jpg",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-600 dark:text-cyan-400 mb-12">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
