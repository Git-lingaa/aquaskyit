<?php
// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Only POST requests are allowed"]);
    exit;
}

// Capture and sanitize form data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
$bottleSize = filter_input(INPUT_POST, 'bottleSize', FILTER_SANITIZE_STRING);
$quantity = filter_input(INPUT_POST, 'quantity', FILTER_VALIDATE_INT);

// Check for missing or invalid fields
if (!$name || !$phone || !$email || !$service || !$bottleSize || !$quantity) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Please fill in all fields correctly."]);
    exit;
}

// Email details
$to = "info@aquaskyit.com"; // Replace with your email address
$subject = "New Quote Request from " . $name;
$message = "
    You have received a new quote request. Here are the details:

    Name: $name
    Phone: $phone
    Email: $email
    Service: $service
    Bottle Size: $bottleSize
    Quantity: $quantity
";
$headers = "info@aquaskyit.com\r\n"; // Replace 'yourdomain.com' with your domain
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Send email
if (mail($to, $subject, $message, $headers)) {
    // Successful response
    echo json_encode(["status" => "success", "message" => "Your request has been sent successfully!"]);
} else {
    // Email sending failed
    http_response_code(500); // Internal Server Error
    echo json_encode(["status" => "error", "message" => "There was an error sending your request. Please try again later."]);
}

?>
