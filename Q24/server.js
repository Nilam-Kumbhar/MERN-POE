
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static('public'));

// PUT method
app.put('/update', (req, res) => {
    const name = req.body.name;

    console.log("Updated Name:", name);

    res.send("Data updated successfully! Name: " + name);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
