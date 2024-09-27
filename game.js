window.onload = function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    let playerId = localStorage.getItem('playerId');
    if (!playerId) {
        playerId = Math.random().toString(36).substr(2, 9);
        localStorage.setItem('playerId', playerId);
    }

    const queenAnts = {};
    const storedPosition = JSON.parse(localStorage.getItem(`position_${playerId}`)) || { x: 100, y: 100 };
    queenAnts[playerId] = {
        x: storedPosition.x,
        y: storedPosition.y,
        targetX: storedPosition.x,
        targetY: storedPosition.y,
        size: 20,
        color: 'brown',
        speed: 2,
        selected: false,
        id: playerId
    };

    let isSelecting = false;
    let selectionBox = { start: null, end: null };
    let selectedAnts = [];
    let moveTo = null;

    const socket = io("http://98.24.120.251:8081", {
        transports: ['websocket', 'polling'],
        withCredentials: true
    });

    socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
        
        // Send this player's data to the server
        socket.emit('newPlayer', {
            id: playerId,
            x: queenAnts[playerId].x,
            y: queenAnts[playerId].y
        });
    });

    // Handle other players joining the game
    socket.on('newPlayer', (data) => {
        if (!queenAnts[data.id]) {
            queenAnts[data.id] = { x: data.x, y: data.y, size: 20, color: 'red', id: data.id, targetX: data.x, targetY: data.y };
        }
    });

    // Sync existing players already in the game
    socket.on('existingPlayers', (players) => {
        players.forEach(player => {
            if (player.id !== playerId && !queenAnts[player.id]) {
                queenAnts[player.id] = {
                    x: player.x,
                    y: player.y,
                    size: 20,
                    color: 'red',
                    id: player.id,
                    targetX: player.x,
                    targetY: player.y
                };
            }
        });
    });

    // Handle player movement
    socket.on('moveAnt', (data) => {
        if (queenAnts[data.id]) {
            queenAnts[data.id].targetX = data.x;
            queenAnts[data.id].targetY = data.y;
        }
    });

    // Handle player disconnect
    socket.on('playerDisconnected', (id) => {
        delete queenAnts[id];
    });

    // Handle mouse down for selection and movement
    canvas.addEventListener('mousedown', (e) => {
        const { x, y } = getMousePos(e);
        if (e.button === 0) {  // Left click
            isSelecting = true;
            selectionBox.start = { x, y };
        }
    });

    // Handle mouse up for movement
    canvas.addEventListener('mouseup', (e) => {
        if (isSelecting) {
            isSelecting = false;
            const { x, y } = getMousePos(e);
            selectionBox.end = { x, y };

            // If there was a drag, select ants, otherwise, move selected ants
            if (Math.abs(selectionBox.start.x - selectionBox.end.x) > 5 || 
                Math.abs(selectionBox.start.y - selectionBox.end.y) > 5) {
                selectAntsInBox(selectionBox.start, selectionBox.end);
            } else {
                moveTo = { x, y };
                selectedAnts.forEach(ant => {
                    ant.targetX = x;
                    ant.targetY = y;
                    socket.emit('moveAnt', { id: ant.id, x, y });
                });
            }

            selectionBox.start = null;
            selectionBox.end = null;
        }
    });

    // Update positions periodically
    setInterval(() => {
        // Update player ant's position with smooth interpolation
        Object.values(queenAnts).forEach(ant => {
            const dx = ant.targetX - ant.x;
            const dy = ant.targetY - ant.y;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                ant.x += dx * 0.1;
                ant.y += dy * 0.1;
            }
        });

        // Update server with player's position
        socket.emit('updatePosition', {
            id: playerId,
            x: queenAnts[playerId].x,
            y: queenAnts[playerId].y
        });

        // Save position to local storage
        localStorage.setItem(`position_${playerId}`, JSON.stringify({ x: queenAnts[playerId].x, y: queenAnts[playerId].y }));
    }, 100);

    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    function selectAntsInBox(start, end) {
        const left = Math.min(start.x, end.x);
        const right = Math.max(start.x, end.x);
        const top = Math.min(start.y, end.y);
        const bottom = Math.max(start.y, end.y);

        selectedAnts = [];
        for (const id in queenAnts) {
            const ant = queenAnts[id];
            if (ant.x > left && ant.x < right && ant.y > top && ant.y < bottom) {
                ant.selected = true;
                selectedAnts.push(ant);
            } else {
                ant.selected = false;
            }
        }
    }

    function drawAnts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const id in queenAnts) {
            const ant = queenAnts[id];
            ctx.fillStyle = ant.color;
            ctx.beginPath();
            ctx.arc(ant.x, ant.y, ant.size, 0, Math.PI * 2);
            ctx.fill();

            if (ant.selected) {
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 2;
                ctx.strokeRect(ant.x - ant.size, ant.y - ant.size, ant.size * 2, ant.size * 2);
            }
        }
    }

    function gameLoop() {
        drawAnts();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};
