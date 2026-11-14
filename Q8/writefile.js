
import fs from 'node:fs';

const data = "Welcome to Node.js.\nThis is a file writing program.";

fs.writeFile('data.txt', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully!");
    }
});
