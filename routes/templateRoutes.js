const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FeedbackTemplate = require('../models/FeedbackTemplate');

// ✅ GET ALL templates
router.get('/', async (req, res) => {
  try {
    const templates = await FeedbackTemplate.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET template by ID
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
