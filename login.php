<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Connect to the database (you'll need to configure database connection)
    $conn = new mysqli("localhost", "username", "password", "database_name");

    // Retrieve user data based on email
    $getUserQuery = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $getUserQuery->bind_param("s", $email);
    $getUserQuery->execute();
    $result = $getUserQuery->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row["password"];

        // Compare hashed password with input password
        if (password_verify($password, $hashedPassword)) {
            // Passwords match; create a session for the user
            session_start();
            $_SESSION["user_id"] = $row["id"];
            $_SESSION["user_email"] = $email;
            echo "Login successful";
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }

    // Close the database connection
    $conn->close();
}
?>
