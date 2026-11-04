const { getCurrentTime } = require('../utils/formatter');

const logger = (req, res, next) => {
    // Simpan fungsi res.send asli
    const originalSend = res.send;
    
    // Override fungsi res.send untuk menangkap status response
    res.send = function (body) {
        const method = req.method;
        const path = req.originalUrl;
        const status = res.statusCode;
        const time = getCurrentTime();

        // Format log yang rapi
        console.log(`[${time}] ${method} ${path} | Status: ${status}`);
        
        // Panggil fungsi asli
        return originalSend.call(this, body);
    };

    next();
};

module.exports = logger;