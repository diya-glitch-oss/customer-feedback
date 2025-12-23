require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const templateRoutes = require('./routes/templateRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const adminFeedbackRoutes = require('./routes/adminFeedbackRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/templates', templateRoutes);
app.use('/api/feedback', feedbackRoutes);

// Admin Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/admin', adminFeedbackRoutes);

// Health Check
app.get('/', (req, res) => {
  res.send('Feedback App Backend is Running');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
