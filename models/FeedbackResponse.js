const mongoose = require('mongoose');

const feedbackResponseSchema = new mongoose.Schema({
    templateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FeedbackTemplate',
        required: true,
    },
    answers: [{
        questionText: String,
        rating: Number,
    }],
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('FeedbackResponse', feedbackResponseSchema);
