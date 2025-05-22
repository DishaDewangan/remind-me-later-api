const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

router.post('/', async (req, res) => {
  const { date, time, message, reminderType } = req.body;

  // Simple validation
  if (!date || !time || !message || !reminderType) {
    return res.status(400).json({
      success: false,
      message: '⛔ All fields are required: date, time, message, reminderType'
    });
  }

  try {
    const reminder = new Reminder({ date, time, message, reminderType });
    await reminder.save();

    res.status(201).json({
      success: true,
      message: 'Reminder saved successfully!',
      data: reminder
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: '❌ Server error while saving reminder',
      error: err.message
    });
  }
});

module.exports = router;
