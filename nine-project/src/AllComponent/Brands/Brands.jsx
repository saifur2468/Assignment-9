import React, { useEffect, useState } from 'react';
import BrandsCard from './BrandsCard';

const Brands = () => {
  const [brandCard, setBrandCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/Cloth.json')
      .then(res => res.json())
      .then(data => setBrandCard(data));
  }, []);

  const filteredBrands = brandCard.filter(brand =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div>
          <h1 className="text-xl md:text-3xl font-serif text-white mt-2 text-center md:text-left">
            All Brands And Information
          </h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Box"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[250px] h-[38px] border-2 border-black rounded-xl mt-2 text-center text-xl"
          />
        </div>
      </div>

      <div className='lg:grid grid-cols-3 mt-5 gap-4'>
        {filteredBrands.map(card => (
          <BrandsCard key={card.id} BrandCard={card} />
        ))}
        {filteredBrands.length === 0 && (
          <p className="text-center col-span-3 text-red-500 font-semibold mt-4">No brands found</p>
        )}
      </div>
    </div>
  );
};

export default Brands;


