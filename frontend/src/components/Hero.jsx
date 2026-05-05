import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/properties?location=${encodeURIComponent(search)}`);
    } else {
      navigate('/properties');
    }
  };

  return (
    <div className="relative bg-[#0A1F44] text-white py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
          alt="Luxury Home"
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-transparent to-[#0A1F44] opacity-60"></div>
      
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#C9A227]/20 rounded-full animate-[bounce_4s_ease-in-out_infinite_1s]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInDown">
          Find Your <span className="text-[#C9A227] relative inline-block">
            Dream
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#C9A227] opacity-50 rounded-full"></span>
          </span> Home
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp delay-200">
          Discover premium properties in the most desirable locations worldwide
        </p>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-400">
          <div className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md p-2 rounded-lg hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-[#C9A227]/20 hover:shadow-lg">
            <input
              type="text"
              placeholder="Search by location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-6 py-4 bg-white text-gray-900 rounded-md focus:outline-none text-lg focus:ring-2 focus:ring-[#C9A227] transition-all"
            />
            <button
              type="submit"
              className="bg-[#C9A227] hover:bg-[#b8921f] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
