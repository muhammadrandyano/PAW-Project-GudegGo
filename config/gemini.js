const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Menggunakan model gemini-1.5-flash (cepat dan cocok untuk chat)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

module.exports = model;