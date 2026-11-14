
import fs from 'node:fs';

// Create writable stream
const writeStream = fs.createWriteStream('output.txt');

// Write data to stream
writeStream.write("Welcome to Node.js.\n");
writeStream.write("This is a stream writing program.\n");

// End the stream
writeStream.end();

// When writing is completed
writeStream.on('finish', () => {
    console.log("Data written successfully!");
});

// Handle errors
writeStream.on('error', (err) => {
    console.log(err);
});
