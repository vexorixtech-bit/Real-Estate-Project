import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import mockProperties from '../mockData';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchProperty = () => {
      try {
        const found = mockProperties.find(p => p.id === parseInt(id));
        setTimeout(() => {
          setProperty(found);
          setLoading(false);
        }, 300);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Simulate API call for demo
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setShowContactForm(false);
        setSubmitStatus(null);
      }, 2000);
    }, 500);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="py-32 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C9A227]"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl text-red-600 mb-4">Property Not Found</h2>
        <Link to="/properties" className="text-[#C9A227] hover:underline">Back to Properties</Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#C9A227]/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#0A1F44]/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <Link to="/properties" className="inline-flex items-center text-[#0A1F44] hover:text-[#C9A227] mb-8 transition-all duration-300 hover:pl-2 animate-fadeInLeft">
          <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Properties
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-scaleIn">
          <div className="relative group">
            <img
              src={property.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200'}
              alt={property.title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-6 left-6 bg-[#C9A227] text-white px-4 py-2 rounded-full font-semibold capitalize shadow-lg animate-bounceIn">
              {property.type}
            </span>
          </div>

          <div className="p-8 animate-fadeInUp">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 animate-fadeInLeft">
              <h1 className="text-4xl font-bold text-[#0A1F44] mb-2 md:mb-0">{property.title}</h1>
              <p className="text-4xl font-bold text-[#C9A227] animate-bounceIn">{formatPrice(property.price)}</p>
            </div>

            <div className="flex items-center text-gray-600 mb-8 animate-fadeInLeft" style={{animationDelay: '100ms'}}>
              <svg className="w-6 h-6 mr-2 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{property.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg animate-scaleIn" style={{animationDelay: '200ms'}}>
              <div className="text-center group hover:bg-white hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-lg py-2">
                <p className="text-gray-600 text-sm mb-1">Bedrooms</p>
                <p className="text-3xl font-bold text-[#0A1F44] group-hover:scale-110 transition-transform">{property.bedrooms}</p>
              </div>
              <div className="text-center group hover:bg-white hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-lg py-2">
                <p className="text-gray-600 text-sm mb-1">Bathrooms</p>
                <p className="text-3xl font-bold text-[#0A1F44] group-hover:scale-110 transition-transform">{property.bathrooms || 0}</p>
              </div>
              <div className="text-center group hover:bg-white hover:shadow-md hover:-translate-y-2 transition-all duration-300 rounded-lg py-2">
                <p className="text-gray-600 text-sm mb-1">Area</p>
                <p className="text-3xl font-bold text-[#0A1F44] group-hover:scale-110 transition-transform">{property.area || 0} <span className="text-lg">sqft</span></p>
              </div>
            </div>

            <div className="mb-8 animate-fadeInUp" style={{animationDelay: '300ms'}}>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4 relative inline-block">
                Description
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#C9A227] rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">{property.description}</p>
            </div>

            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="w-full bg-[#C9A227] hover:bg-[#b8921f] text-white py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
            >
              {showContactForm ? 'Close Contact Form' : 'Contact Agent'}
            </button>

            {showContactForm && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg animate-fadeInUp">
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-6">Send Enquiry</h3>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Enquiry sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Failed to send enquiry. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] mb-4"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] mb-4"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#0A1F44] text-white py-3 rounded-md hover:bg-[#C9A227] transition-all duration-300 font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
