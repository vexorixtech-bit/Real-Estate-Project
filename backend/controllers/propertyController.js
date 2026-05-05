const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
  try {
    const filters = {
      location: req.query.location,
      type: req.query.type,
      minPrice: req.query.minPrice ? parseFloat(req.query.minPrice) : null,
      maxPrice: req.query.maxPrice ? parseFloat(req.query.maxPrice) : null,
      bedrooms: req.query.bedrooms ? parseInt(req.query.bedrooms) : null
    };

    Object.keys(filters).forEach(key => {
      if (filters[key] === null || filters[key] === '') delete filters[key];
    });

    const properties = await Property.getAll(filters);
    res.json({ success: true, data: properties });
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getFeaturedProperties = async (req, res) => {
  try {
    const properties = await Property.getFeatured();
    res.json({ success: true, data: properties });
  } catch (error) {
    console.error('Error fetching featured properties:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.getById(req.params.id);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }
    res.json({ success: true, data: property });
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
