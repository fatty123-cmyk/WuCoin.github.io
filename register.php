<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Implement client-side validation for email and password (e.g., format checks)
    
    // Connect to the database (you'll need to configure database connection)
    $conn = new mysqli("localhost", "username", "password", "database_name");
    
    // Check for existing email
    $existingEmailQuery = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $existingEmailQuery->bind_param("s", $email);
    $existingEmailQuery->execute();
    $result = $existingEmailQuery->get_result();

    if ($result->num_rows > 0) {
        echo "Email already registered";
    } else {
        // Hash the password using a strong hashing library like password_hash
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // Insert user data into the database
        $insertQuery = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        $insertQuery->bind_param("sss", $name, $email, $hashedPassword);

        if ($insertQuery->execute()) {
            echo "Registration successful";
        } else {
            echo "Registration failed";
        }
    }

    // Close the database connection
    $conn->close();
}
?>
