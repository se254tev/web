const express = require('express');
const router = express.Router();
const displayNameController = require('../controllers/displayNameController');

// Route to save a new display name
router.post('/add', displayNameController.saveDisplayName);

// Route to get all display names
router.get('/names', displayNameController.getDisplayNames);

module.exports = router;
