const FeedbackResponse = require('../models/FeedbackResponse');

exports.submitFeedback = async (req, res) => {
    try {
        const { templateId, answers } = req.body;

        if (!templateId || !answers || answers.length === 0) {
            return res.status(400).json({ message: 'Template ID and answers are required' });
        }

        const response = new FeedbackResponse({ templateId, answers });
        const savedResponse = await response.save();
        res.status(201).json(savedResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
