
import { MongoClient } from 'mongodb';

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017';

// Create MongoDB client
const client = new MongoClient(url);

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        // Create database
        const db = client.db('CollegeDB');

        // Create collection
        const collection = db.collection('Students');

        // Insert records
        const result = await collection.insertMany([
            { name: "Rahul", age: 21, course: "Computer" },
            { name: "Priya", age: 22, course: "IT" },
            { name: "Amit", age: 20, course: "Mechanical" }
        ]);

        console.log("Records inserted:", result.insertedCount);

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

main();


// Open MongoDB Compass.
// Connect using mongodb://127.0.0.1:27017.
// Open the CollegeDB database.
// Open the Students collection.
// run node insert.js You will see the three inserted records.