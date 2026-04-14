import React from 'react';
import Image from 'next/image';
import heroImg from '@/assets/banner-image.png'

const Banner = () => {
    return (
 <div className="hero min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Find Your Next <span className='text-[#0a1172e3]'>Favorite App</span>
      </h1>

      {/* Subheading */}
      <p className="py-6 text-lg text-gray-500">
        From productivity to entertainment — everything you need in one place.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        
        {/* Primary */}
        <button className="btn bg-black text-white px-6 rounded-full hover:bg-gray-800 transition">
          Explore Apps
        </button>

        {/* Secondary */}
        <button className="btn btn-outline px-6 rounded-full hover:bg-gray-200 transition">
          Browse Categories
        </button>

      </div >
                 <Image src={heroImg} alt=''></Image>  
                </div>
                  
  </div>
</div>
    );
};

export default Banner;