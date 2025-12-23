const mongoose = require('mongoose');

const feedbackTemplateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [{
        text: { type: String, required: true },
        type: { type: String, default: 'rating' }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('FeedbackTemplate', feedbackTemplateSchema);
