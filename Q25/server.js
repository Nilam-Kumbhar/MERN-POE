
import express from 'express';
import router from './routes.js';

const app = express();

// Use router
app.use('/', router);

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
