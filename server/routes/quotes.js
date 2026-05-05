const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const authMiddleware = require('../middleware/auth');

// @route  GET /api/quotes
// @desc   Get all quotes (public)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route  POST /api/quotes
// @desc   Create a new quote (protected)
router.post('/', authMiddleware, async (req, res) => {
  const { text, author, category } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Quote text is required' });
  }

  try {
    const quote = await Quote.create({
      text,
      author: author || 'Anonymous',
      category: category || 'General',
      createdBy: req.user.id,
    });

    const populated = await quote.populate('createdBy', 'name');
    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
