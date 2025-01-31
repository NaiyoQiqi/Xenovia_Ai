const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);

// Fungsi untuk mengonversi audio dengan bitrate tertentu
function convertAudio(inputPath, outputPath, format, bitrate = '128k') {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .audioBitrate(bitrate)
            .toFormat(format)
            .on('end', () => {
                console.log(`Konversi ke ${format} dengan bitrate ${bitrate} selesai.`);
                resolve();
            })
            .on('error', (err) => {
                console.error(`Kesalahan selama konversi: ${err.message}`);
                reject(err);
            })
            .save(outputPath);
    });
}

module.exports = convertAudio;
