import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import mockProperties from '../mockData';

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using mock data for demo - no backend required
    const fetchFeatured = () => {
      try {
        const featured = mockProperties.filter(p => p.featured);
        setFeaturedProperties(featured);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchFeatured, 500); // Simulate loading
  }, []);

  return (
    <div>
      <Hero />

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#C9A227]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0A1F44]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4 relative inline-block">
              Featured Properties
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#C9A227] rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg mt-4">Discover our handpicked selection of premium properties</p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C9A227]"></div>
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="bg-[#C9A227] hover:bg-[#b8921f] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg active:scale-95 animate-bounceIn"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44]/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 text-center group hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 rounded-lg border border-transparent hover:border-[#C9A227]/20 animate-fadeInUp opacity-0" style={{animationDelay: '100ms'}}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C9A227]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C9A227]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-[#C9A227] mb-4 group-hover:scale-110 transition-transform duration-300">500+</div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">Premium Properties</h3>
              <p className="text-gray-600">Carefully curated luxury properties in prime locations</p>
            </div>
            <div className="p-8 text-center group hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 rounded-lg border border-transparent hover:border-[#C9A227]/20 animate-fadeInUp opacity-0" style={{animationDelay: '200ms'}}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C9A227]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C9A227]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-[#C9A227] mb-4 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">Happy Clients</h3>
              <p className="text-gray-600">Satisfied customers who found their dream homes</p>
            </div>
            <div className="p-8 text-center group hover:bg-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 rounded-lg border border-transparent hover:border-[#C9A227]/20 animate-fadeInUp opacity-0" style={{animationDelay: '300ms'}}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#C9A227]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C9A227]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-[#C9A227] mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
              <h3 className="text-xl font-semibold text-[#0A1F44] mb-2">Years Experience</h3>
              <p className="text-gray-600">Decades of expertise in real estate market</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6 animate-fadeInUp">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Let our expert team guide you through the journey of finding the perfect property
          </p>
          <Link
            to="/contact"
            className="bg-[#C9A227] hover:bg-[#b8921f] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg active:scale-95 animate-bounceIn"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
