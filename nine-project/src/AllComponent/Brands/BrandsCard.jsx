import React from 'react';
import { CiStar } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthSection/AuthoProvider";

const BrandsCard = ({ BrandCard }) => {
  const { brand_name, rating, brand_logo, description, category, isSaleOn } = BrandCard;
  const { user } = useAuth();
  const navigate = useNavigate();

  // const handleViewCoupons = () => {
  //   if (user) {
     
  //     navigate(`/coupons/${brand_name}`);
  //   } else {

  //     navigate("/login", { state: { from: `/coupons/${brand_name}` } });
  //   }
  // };


  const handleViewCoupons = () => {
  if (user) {
    navigate(`/coupons/${brand_name}`, {
      state: { brandData: BrandCard },
    });
  } else {
    navigate("/login", { state: { from: `/coupons/${brand_name}` } });
  }
};


  return (
    <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-sm">
      <figure>
        <img
          className="w-full h-[200px] object-contain"
          src={brand_logo}
          alt="Brand Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl">
          {brand_name}
          <div className="badge badge-secondary flex items-center gap-1">
            <CiStar /> {rating}
          </div>
        </h2>
        <p className="text-sm md:text-base">{description}</p>
        {isSaleOn && (
          <button className="btn btn-success btn-sm mt-2">Sale is on</button>
        )}
        <div className="card-actions justify-end mt-2 flex-wrap gap-2">
          <div className="badge badge-outline">{category}</div>
          <div
            onClick={handleViewCoupons}
            className="badge badge-outline cursor-pointer"
          >
            View Coupons
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;

