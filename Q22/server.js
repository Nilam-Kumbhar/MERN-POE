
import express from 'express';

const app = express();

// GET method
app.get('/', (req, res) => {
    res.send("Welcome to GET Method in Express.js!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
