
import net from 'node:net';

// 1. Create TCP Server
const server = net.createServer((socket) => {
    console.log("Client Connected");

    // Receive data from client
    socket.on('data', (data) => {
        console.log("Received:", data.toString());

        // 4. Send response
        socket.write("Hello from Server!");
    });
});

// 2. Start Server
server.listen(3000, () => {
    console.log("Server listening on port 3000");

    // 3. Connect Client
    const client = net.connect(3000, 'localhost', () => {
        console.log("Client Connected to Server");

        // 5. Send data
        client.write("Hello from Client!");
    });

    client.on('data', (data) => {
        console.log(data.toString());
        client.end();
        server.close();
    });
});
