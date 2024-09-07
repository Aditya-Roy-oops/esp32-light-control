<?php
// Path to the JSON file where light statuses are stored
$statusFile = '../light_status.json'; 

// Get the current status from the file
$status = json_decode(file_get_contents($statusFile), true);

// Update status if "pin" and "action" parameters are provided
if (isset($_GET['pin']) && isset($_GET['action'])) {
    $pin = $_GET['pin'];
    $action = $_GET['action'];

    // Validate the pin and action
    if (($pin == 'light1' || $pin == 'light2') && ($action == 'on' || $action == 'off')) {
        $status[$pin] = $action; // Update the status
        file_put_contents($statusFile, json_encode($status)); // Save the updated status
    }
}

// Return the current status in JSON format
header('Content-Type: application/json');
echo json_encode($status);
?>
