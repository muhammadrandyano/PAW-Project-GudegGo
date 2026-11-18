const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');
const { validateChat } = require('../middlewares/validateChatInput');

// Endpoint POST /api/chat
router.post('/chat', validateChat, chatController.handleChat);

module.exports = router;