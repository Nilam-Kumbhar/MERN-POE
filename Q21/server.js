
import express from 'express';
import path from 'node:path';

const app = express();

// 1. res.send()
app.get('/send', (req, res) => {
    res.send("Hello from Express.js!");
});

// 2. res.json()
app.get('/json', (req, res) => {
    res.json({ name: "Nilam", course: "Computer Engineering" });
});

// 3. res.status()
app.get('/status', (req, res) => {
    res.status(200).send("Success!");
});

// 4. res.redirect()
app.get('/redirect', (req, res) => {
    res.redirect('/send');
});

// 5. res.sendFile()
app.get('/file', (req, res) => {
    res.sendFile(path.resolve('demo.txt'));
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
