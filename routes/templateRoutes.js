const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FeedbackTemplate = require('../models/FeedbackTemplate');

/**
 * ✅ CREATE TEMPLATE (POST)
 */
router.post('/', async (req, res) => {
  try {
    const { title, questions } = req.body;

    if (!title || !questions || questions.length === 0) {
      return res.status(400).json({ message: 'Title and questions are required' });
    }

    const newTemplate = new FeedbackTemplate({ title, questions });
    const savedTemplate = await newTemplate.save();

    res.status(201).json(savedTemplate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * ✅ GET ALL TEMPLATES
 */
router.get('/', async (req, res) => {
  try {
    const templates = await FeedbackTemplate.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * ✅ GET TEMPLATE BY ID
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid template ID' });
  }

  try {
    const template = await FeedbackTemplate.findById(id);

    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }

    res.json(template);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
