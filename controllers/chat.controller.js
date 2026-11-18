const geminiService = require('../services/gemini.service');

exports.handleChat = async (req, res) => {
    const { message } = req.body;

    try {
        // Panggil Service AI
        const reply = await geminiService.generateResponse(message);

        // Format Response sesuai instruksi tugas
        res.status(200).json({
            success: true,
            data: {
                reply: reply
            }
        });

    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({
            success: false,
            message: "Maaf, layanan AI sedang sibuk atau tidak tersedia. Silakan coba beberapa saat lagi."
        });
    }
};