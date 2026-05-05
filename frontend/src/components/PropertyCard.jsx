import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group cursor-pointer animate-fadeInUp opacity-0">
      <Link to={`/properties/${property.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={property.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'}
            alt={property.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {property.featured && (
            <span className="absolute top-4 left-4 bg-[#C9A227] text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounceIn shadow-lg">
              Featured
            </span>
          )}
          <span className="absolute top-4 right-4 bg-[#0A1F44] text-white px-3 py-1 rounded-full text-sm font-semibold capitalize backdrop-blur-sm group-hover:bg-[#C9A227] transition-colors duration-300">
            {property.type}
          </span>
          
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-sm font-medium">Click to explore</p>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-[#0A1F44] line-clamp-1 group-hover:text-[#C9A227] transition-colors duration-300">{property.title}</h3>
        </div>
        <p className="text-2xl font-bold text-[#C9A227] mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">{formatPrice(property.price)}</p>
        
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-5 h-5 mr-2 text-[#C9A227] group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex justify-between text-gray-600 text-sm pt-4 border-t group-hover:border-[#C9A227]/30 transition-colors duration-300">
          <div className="flex items-center hover:text-[#C9A227] transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {property.bedrooms} Beds
          </div>
          <div className="flex items-center hover:text-[#C9A227] transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {property.bathrooms || 0} Baths
          </div>
          <div className="flex items-center hover:text-[#C9A227] transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.area || 0} sqft
          </div>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-4 block w-full text-center bg-[#0A1F44] text-white py-3 rounded-md hover:bg-[#C9A227] transition-all duration-300 font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-95"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
