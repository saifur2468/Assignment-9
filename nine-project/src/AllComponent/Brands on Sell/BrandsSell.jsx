import React, { useEffect, useState } from "react";

const BrandsSell = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/Cloth.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((brand) => brand.isSaleOn);
        setBrands(filtered);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Brands On Sell
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <div
            key={brand._id}
            className="bg-white rounded-2xl shadow p-5 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{brand.brand_name}</h2>
            <p className="text-gray-600 mb-1">Category: {brand.category}</p>
            <p className="text-blue-600 font-medium">
              Total coupon: {brand.coupons.length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSell;

