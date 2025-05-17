import React from 'react';
 import chobi from '../../assets/6505894.jpg'
 import art from '../../assets/m010t0655_d_sale_banner_03mar23.jpg'
 import pic from '../../assets/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes.jpg'
const Hero = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={chobi}
      className="w-full  image-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={art}
      className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={pic}
      className="w-full h-[550px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
  </div>
</div>

        
    );
};

export default Hero;


