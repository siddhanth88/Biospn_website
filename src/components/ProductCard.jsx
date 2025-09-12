import React from "react";

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {name}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
