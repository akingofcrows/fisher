const http = require('http');
const { Server } = require('socket.io');

// Create HTTP server
const server = http.createServer();
const port = process.env.PORT || 8080;
const io = new Server(server, {
    cors: {
        origin: "http://98.24.120.251:8081", // Update to your actual client URL and port
        methods: ["GET", "POST"],
        credentials: true, // Ensure credentials support if needed
    }
});

let players = {}; // Store positions of all players

io.on('connection', (socket) => {
    console.log('Player connected:', socket.id);

    // Send all connected players' positions to the newly connected player
    for (const id in players) {
        socket.emit('updatePosition', players[id]);
    }

    // Listen for new player event
    socket.on('newPlayer', (data) => {
        players[data.id] = { id: data.id, x: data.x, y: data.y };
        // Broadcast the new player to all other clients
        socket.broadcast.emit('newPlayer', {
            id: data.id,
            x: data.x,
            y: data.y
        });
    });

    // Listen for position updates
    socket.on('updatePosition', (data) => {
        // Update player's position
        players[data.id] = { id: data.id, x: data.x, y: data.y };

        // Broadcast the position to all other clients
        socket.broadcast.emit('updatePosition', {
            id: data.id,
            x: data.x,
            y: data.y
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Player disconnected:', socket.id);
        delete players[socket.id];

        // Notify others that the player disconnected
        socket.broadcast.emit('playerDisconnected', socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
