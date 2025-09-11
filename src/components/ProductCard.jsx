function ProductCard({ name, description, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition p-4">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      {price && <p className="mt-4 font-bold text-blue-600">{price}</p>}
    </div>
  );
}

export default ProductCard;