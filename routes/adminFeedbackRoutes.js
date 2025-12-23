const express = require("express");
const Feedback = require("../models/FeedbackResponse");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/feedback", authMiddleware, async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch feedback" });
    }
});

module.exports = router;
