const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

router.post('/add', discussionController.addDiscussion);
router.get('/summaries', discussionController.getDiscussionSummaries);
router.get('/details', discussionController.getDiscussionDetails);

module.exports = router;
