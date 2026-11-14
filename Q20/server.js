
import express from 'express';

const app = express();

// Demonstrating 5 request properties
app.get('/user/:id', (req, res) => {

    // 1. Request Method
    console.log("Request Method:", req.method);

    // 2. Request URL
    console.log("Request URL:", req.url);

    // 3. Route Parameters
    console.log("User ID:", req.params.id);

    // 4. Query Parameters
    console.log("City:", req.query.city);

    // 5. Request Headers
    console.log("Request Headers:", req.headers);

    res.send("Request Object Demonstration Completed!");
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// run url: http://localhost:3000/user/101?city=Kolhapur