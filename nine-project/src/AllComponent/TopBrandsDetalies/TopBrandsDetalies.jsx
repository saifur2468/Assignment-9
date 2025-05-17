import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopBrandsDetalies = () => {
    const brandData = useLoaderData(); 

    const { brand_name, rating, brand_logo, description, category, isSaleOn, coupons } = brandData;

    return (
        <div>
            <section className="flex flex-col lg:flex-row justify-between items-center border-2 w-full h-[550px] rounded-xl bg-blue-400 p-4  lg:h-[350px] lg:mt-10 mb-20">
                <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                    <img src={brand_logo} alt="Brand Logo" className="max-w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="text-center lg:text-left w-full lg:w-[60%]">
                    <h1 className="text-2xl font-bold text-white">{brand_name}</h1>
                    <h2 className="text-xl text-yellow-300 mt-1">{rating}</h2>
                    <p className="text-white mt-2">{description}</p>
                    <h1 className="text-xl font-semibold text-white mt-2">{category}</h1>
                    <h2 className="text-lg font-medium text-white mt-2">{isSaleOn ? "Sale is On!" : "No Sale Currently"}</h2>
                    
                    {coupons && coupons.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-white">Available Coupons:</h3>
                            <ul className="text-white mt-2">
                                {coupons.map((coupon, index) => (
                                    <li key={index} className="mt-2">
                                        <div className="text-sm">{coupon["coupon-code"]}</div>
                                        <div className="text-sm">{coupon.description}</div>
                                        <div className="text-sm">Expiry Date: {coupon["expiry-date"]}</div>
                                        <div className="text-sm">Condition: {coupon.condition}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TopBrandsDetalies;
