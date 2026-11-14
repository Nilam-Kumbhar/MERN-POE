
import express from 'express';

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// POST method
app.post('/submit', (req, res) => {
    res.send("Data submitted successfully!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
