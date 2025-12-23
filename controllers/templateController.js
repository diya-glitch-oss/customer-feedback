const FeedbackTemplate = require('../models/FeedbackTemplate');

exports.createTemplate = async (req, res) => {
    try {
        const { title, questions } = req.body;
        if (!title || !questions || questions.length === 0) {
            return res.status(400).json({ message: 'Title and questions are required' });
        }
        const newTemplate = new FeedbackTemplate({ title, questions });
        const savedTemplate = await newTemplate.save();
        res.status(201).json(savedTemplate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTemplateById = async (req, res) => {
    try {
        const template = await FeedbackTemplate.findById(req.params.id);
        if (!template) return res.status(404).json({ message: 'Template not found' });
        res.status(200).json(template);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
