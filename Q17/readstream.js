
import fs from 'node:fs';

// Create readable stream
const readStream = fs.createReadStream('data.txt', 'utf8');

// Read data from stream
readStream.on('data', (chunk) => {
    console.log("Received Data:");
    console.log(chunk);
});

// When reading is complete
readStream.on('end', () => {
    console.log("Reading completed!");
});

// Handle errors
readStream.on('error', (err) => {
    console.log(err);
});
