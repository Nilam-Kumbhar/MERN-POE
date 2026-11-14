
import express from 'express';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
});

// About route
router.get('/about', (req, res) => {
    res.send("Welcome to About Page!");
});

export default router;
