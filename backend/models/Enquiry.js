const { pool } = require('../config/db');

const Enquiry = {
  async create(data) {
    const [result] = await pool.execute(
      'INSERT INTO enquiries (name, email, phone, message, property_id) VALUES (?, ?, ?, ?, ?)',
      [data.name, data.email, data.phone, data.message, data.property_id]
    );
    return result.insertId;
  },

  async getAll() {
    const [rows] = await pool.execute(
      `SELECT e.*, p.title as property_title, p.location as property_location 
       FROM enquiries e 
       LEFT JOIN properties p ON e.property_id = p.id 
       ORDER BY e.created_at DESC`
    );
    return rows;
  }
};

module.exports = Enquiry;
