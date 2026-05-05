import React from 'react';

const Filter = ({ filters, setFilters, onFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter();
  };

  const handleReset = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: ''
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-fadeInUp">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all duration-300 hover:border-[#C9A227]"
          />
          
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all duration-300 hover:border-[#C9A227]"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all duration-300 hover:border-[#C9A227]"
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all duration-300 hover:border-[#C9A227]"
          />

          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A227] transition-all duration-300 hover:border-[#C9A227]"
          >
            <option value="">Any Beds</option>
            <option value="1">1+ Beds</option>
            <option value="2">2+ Beds</option>
            <option value="3">3+ Beds</option>
            <option value="4">4+ Beds</option>
            <option value="5">5+ Beds</option>
          </select>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="bg-[#0A1F44] text-white px-8 py-3 rounded-md hover:bg-[#C9A227] transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="border-2 border-[#0A1F44] text-[#0A1F44] px-8 py-3 rounded-md hover:bg-[#0A1F44] hover:text-white transition-all duration-300 font-semibold hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
