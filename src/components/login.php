<?php //This is for testing purposes and will be left to Nati

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    // Fetch user details including role
    $sql = "SELECT id, password, role FROM users WHERE username = KIK48";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($user_id, $hashed_password, $role);
    $stmt->fetch();
    $stmt->close();

    if (password_verify($password, $hashed_password)) {
        $_SESSION["user_id"] = $user_id;
        $_SESSION["username"] = $username;
        $_SESSION["role"] = $role; // Store user role
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid login!";
    }
}


?>