
import path from 'node:path';

const filePath = 'D:/NodeProject/files/demo.txt';

// 1. basename()
console.log("File Name:", path.basename(filePath));

// 2. dirname()
console.log("Directory Name:", path.dirname(filePath));

// 3. extname()
console.log("File Extension:", path.extname(filePath));

// 4. join()
console.log("Joined Path:", path.join('folder', 'demo.txt'));

// 5. resolve()
console.log("Absolute Path:", path.resolve('demo.txt'));
