import Marquee from 'react-fast-marquee';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.jpeg';
import logo3 from '../../assets/logo3.jpeg';
import logo4 from '../../assets/logo4.jpeg';
import logo5 from '../../assets/logo 5.jpeg'; 
import logo6 from '../../assets/logo 6.png';  
import { NavLink } from 'react-router-dom';

const brandLogos = [
  {id:1, name: 'TechZone', url: logo1 },
  {id:2, name: 'StyleMart', url: logo2 },
  {id:3, name: 'GroceryGo', url: logo3 },
  {id:4, name: 'BookBarn', url: logo4 },
  {id:5, name: 'BookBarn', url: logo5 },
  {id:6, name: 'ToyWorld', url: logo6 },
];

const Topbrands = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h1 className=' text-center m-auto text-5xl font-serif pb-5 text-cyan-700'>Top Brands</h1>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {brandLogos.map((brand, index) => (
          <div
            key={index}
            className="mx-4 bg-white rounded-xl shadow-md p-4 flex items-center justify-center w-40 h-28 hover:scale-105 transition-transform duration-300"
          >
           <NavLink to={`/details/${brand.id}`}>
             <img
              src={brand.url}
              alt={brand.name}
              className="h-16 w-auto object-contain"
            />
           </NavLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Topbrands;





















