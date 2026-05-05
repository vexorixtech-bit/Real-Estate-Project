import React, { useState, useEffect, useCallback } from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import mockProperties from '../mockData';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: ''
  });

  const fetchProperties = useCallback(() => {
    setLoading(true);
    try {
      let filtered = [...mockProperties];

      if (filters.location) {
        filtered = filtered.filter(p => 
          p.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
      if (filters.type) {
        filtered = filtered.filter(p => p.type === filters.type);
      }
      if (filters.minPrice) {
        filtered = filtered.filter(p => p.price >= parseFloat(filters.minPrice));
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(p => p.price <= parseFloat(filters.maxPrice));
      }
      if (filters.bedrooms) {
        filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
      }

      setTimeout(() => {
        setProperties(filtered);
        setLoading(false);
      }, 300); // Simulate loading
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-4">All Properties</h1>
          <p className="text-gray-600 text-lg">Browse our complete collection of premium properties</p>
        </div>

        <Filter filters={filters} setFilters={setFilters} onFilter={fetchProperties} />

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C9A227]"></div>
          </div>
        )}

        {!loading && properties.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl">No properties found matching your criteria.</p>
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center text-gray-600">
          Showing {properties.length} {properties.length === 1 ? 'property' : 'properties'}
        </div>
      </div>
    </div>
  );
};

export default Properties;
