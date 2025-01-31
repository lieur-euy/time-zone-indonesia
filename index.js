const express = require('express');
const moment = require('moment-timezone');

const app = express();
const PORT = 3005;

app.get('/time', (req, res) => {
    const { timezone } = req.query;
    const allowedTimezones = ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura'];
    
    // Validasi parameter timezone
    if (!timezone || !allowedTimezones.includes(timezone)) {
        return res.status(400).json({
            statusCode: 400,
            message: 'Timezone harus salah satu dari: Asia/Jakarta, Asia/Makassar, Asia/Jayapura'
        });
    }
    
    try {
        // Ambil waktu saat ini berdasarkan zona waktu
        const currentTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
        // Respons sukses
        res.status(200).json({
            statusCode: 200,
            message: "Success",
            data:{
                timezone: timezone,
                currentTime: currentTime
            }
         
        });
    } catch (error) {
        // Tangani kesalahan server
        res.status(500).json({
            status: 500,
            message: 'Terjadi kesalahan server saat memproses permintaan'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});