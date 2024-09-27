const fs = require('fs');
const path = require('path');

// Project structure
const folders = [
    'ant_simulator/assets',
    'ant_simulator/css',
    'ant_simulator/js',
    'ant_simulator/server',
];

const files = {
    'ant_simulator/index.html': `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplayer Ant Simulator</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Ant Simulator</h1>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script src="js/game.js"></script>
</body>
</html>
`,
    'ant_simulator/css/style.css': `
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}
h1 {
    color: green;
}
canvas {
    border: 1px solid black;
    display: block;
    margin: 20px auto;
}
`,
    'ant_simulator/js/game.js': `
window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Basic game objects
    const ant = { x: 400, y: 300, size: 10, color: 'brown', speed: 2 };
    const food = [];

    // Create random food positions
    for (let i = 0; i < 5; i++) {
        food.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 5,
            collected: false
        });
    }

    // Handle player movement
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') ant.x -= ant.speed;
        if (e.key === 'ArrowRight') ant.x += ant.speed;
        if (e.key === 'ArrowUp') ant.y -= ant.speed;
        if (e.key === 'ArrowDown') ant.y += ant.speed;
    });

    function drawAnt() {
        ctx.fillStyle = ant.color;
        ctx.beginPath();
        ctx.arc(ant.x, ant.y, ant.size, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawFood() {
        food.forEach((item) => {
            if (!item.collected) {
                ctx.fillStyle = 'green';
                ctx.beginPath();
                ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    function checkFoodCollision() {
        food.forEach((item) => {
            const dist = Math.hypot(ant.x - item.x, ant.y - item.y);
            if (dist < ant.size + item.size) {
                item.collected = true;
                console.log('Food collected!');
            }
        });
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawAnt();
        drawFood();
        checkFoodCollision();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}
`,
    'ant_simulator/server/config.php': `
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ant_simulator";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
`,
    'ant_simulator/server/game_state.php': `
<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT id, position_x, position_y, collected FROM food_sources WHERE collected = 0");
    $food = array();
    while($row = $result->fetch_assoc()) {
        $food[] = $row;
    }
    echo json_encode($food);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $food_id = $_POST['food_id'];
    $conn->query("UPDATE food_sources SET collected = 1 WHERE id = $food_id");
}
?>
`,
};

// Function to create folders
function createFolders(folders) {
    folders.forEach(folder => {
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
            console.log(`Created folder: ${folder}`);
        }
    });
}

// Function to create files with content
function createFiles(files) {
    for (const [filePath, content] of Object.entries(files)) {
        fs.writeFileSync(filePath, content);
        console.log(`Created file: ${filePath}`);
    }
}

// Run the setup
createFolders(folders);
createFiles(files);

console.log('HTML5 project setup complete!');
