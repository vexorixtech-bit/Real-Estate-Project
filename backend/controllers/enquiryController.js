const Enquiry = require('../models/Enquiry');

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message, property_id } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    const enquiryId = await Enquiry.create({ name, email, phone, message, property_id });
    res.status(201).json({ 
      success: true, 
      message: 'Enquiry submitted successfully',
      id: enquiryId 
    });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
