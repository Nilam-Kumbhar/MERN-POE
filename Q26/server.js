
import express from 'express';

const app = express();

// Middleware using app.use()
app.use((req, res, next) => {
    console.log("Middleware Executed");
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Express.js!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
