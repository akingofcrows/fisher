
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
