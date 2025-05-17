import { useParams, useLocation } from "react-router-dom";

const CouponsPage = () => {
  const { brand_name } = useParams();
  const location = useLocation();
  const brandData = location.state?.brandData;

  if (!brandData) {
    return <p className="text-red-500 text-center mt-10">No brand data found!</p>;
  }

  const { brand_logo, rating, description, category, isSaleOn, shop_link,} = brandData;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Coupons for {brand_name}
      </h2>

      <div className="flex flex-col items-center gap-4">
        <img src={brand_logo} alt={brand_name} className="w-40 h-40 object-contain" />

        <p className="text-lg text-gray-700 text-center">{description}</p>

        <p className="text-gray-600">
          <span className="font-semibold">Rating:</span>{" "}
          <span className="text-yellow-500 font-bold">{rating} </span>
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {category}
        </p>
        

        {isSaleOn && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Sale is ON
          </span>
        )}

        <a
          href={shop_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Visit Shop
        </a>
      </div>
    </div>
  );
};

export default CouponsPage;

