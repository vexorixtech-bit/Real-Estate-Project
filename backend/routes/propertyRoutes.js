const express = require('express');
const router = express.Router();
const { getProperties, getFeaturedProperties, getPropertyById } = require('../controllers/propertyController');

router.get('/', getProperties);
router.get('/featured', getFeaturedProperties);
router.get('/:id', getPropertyById);

module.exports = router;
