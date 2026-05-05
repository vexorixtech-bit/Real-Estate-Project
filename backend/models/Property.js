const { pool } = require('../config/db');

const Property = {
  async getAll(filters = {}) {
    let query = 'SELECT * FROM properties WHERE status = "available"';
    const params = [];

    if (filters.location) {
      query += ' AND location LIKE ?';
      params.push(`%${filters.location}%`);
    }
    if (filters.type) {
      query += ' AND type = ?';
      params.push(filters.type);
    }
    if (filters.minPrice) {
      query += ' AND price >= ?';
      params.push(filters.minPrice);
    }
    if (filters.maxPrice) {
      query += ' AND price <= ?';
      params.push(filters.maxPrice);
    }
    if (filters.bedrooms) {
      query += ' AND bedrooms >= ?';
      params.push(filters.bedrooms);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await pool.execute(query, params);
    return rows;
  },

  async getFeatured() {
    const [rows] = await pool.execute(
      'SELECT * FROM properties WHERE featured = TRUE AND status = "available" ORDER BY created_at DESC LIMIT 6'
    );
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.execute('SELECT * FROM properties WHERE id = ?', [id]);
    return rows[0];
  },

  async create(data) {
    const [result] = await pool.execute(
      'INSERT INTO properties (title, price, location, type, bedrooms, bathrooms, area, image, description, featured, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.title, data.price, data.location, data.type, data.bedrooms, data.bathrooms, data.area, data.image, data.description, data.featured || false, data.status || 'available']
    );
    return result.insertId;
  }
};

module.exports = Property;
