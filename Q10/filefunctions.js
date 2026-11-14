
import fs from 'node:fs';

// 1. Write File
fs.writeFile('demo.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log("1. File written successfully!");

    // 2. Read File
    fs.readFile('demo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log("2. File Content:", data);

        // 3. Append File
        fs.appendFile('demo.txt', '\nWelcome to File System!', (err) => {
            if (err) throw err;
            console.log("3. Content appended successfully!");

            // 4. Rename File
            fs.rename('demo.txt', 'newdemo.txt', (err) => {
                if (err) throw err;
                console.log("4. File renamed successfully!");

                // 5. Delete File
                fs.unlink('newdemo.txt', (err) => {
                    if (err) throw err;
                    console.log("5. File deleted successfully!");
                });
            });
        });
    });
});
