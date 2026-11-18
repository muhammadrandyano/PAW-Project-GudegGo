exports.validateChat = (req, res, next) => {
    const { message } = req.body;

    // Validasi 1: Kosong
    if (!message || message.trim() === "") {
        return res.status(400).json({ success: false, message: "Pesan tidak boleh kosong." });
    }

    // Validasi 2: Batas panjang pesan (Misal: max 500 karakter)
    if (message.length > 500) {
        return res.status(400).json({ success: false, message: "Pesan terlalu panjang. Maksimal 500 karakter." });
    }

    // Validasi 3: Basic Prompt Injection Protection (Keyword blocking)
    const forbiddenKeywords = ["abaikan instruksi", "ignore previous instructions", "system prompt", "buatkan kode", "tuliskan script"];
    const lowerMessage = message.toLowerCase();
    
    for (const keyword of forbiddenKeywords) {
        if (lowerMessage.includes(keyword)) {
            return res.status(403).json({ 
                success: false, 
                message: "Maaf, saya tidak bisa memproses permintaan tersebut. Saya hanya bisa membantu seputar Gudeg Go." 
            });
        }
    }

    next();
};