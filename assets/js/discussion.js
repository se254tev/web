const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    details: { type: String, required: true },
    media: [{
        type: { type: String, enum: ['image', 'video', 'document', 'link'], required: true },
        url: { type: String, required: true }
    }]
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
