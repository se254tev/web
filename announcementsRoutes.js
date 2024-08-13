const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

router.post('/add', announcementController.addAnnouncement);
router.get('/summaries', announcementController.getAnnouncementSummaries);
router.get('/details', announcementController.getAnnouncementDetails);

module.exports = router;
