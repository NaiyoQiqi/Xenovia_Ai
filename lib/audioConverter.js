const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
ffmpeg.setFfmpegPath(ffmpegPath);

function convertAudio(inputPath, outputPath, format = 'mp3', bitrate = '128k') {
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
