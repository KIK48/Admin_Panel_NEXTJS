 <?php 

// Manually set a test user ID (Replace with a real user ID from your database)
if (!isset($_SESSION['user_id'])) {
    $_SESSION['user_id'] = 6; // Set this to an actual user ID
    $_SESSION['username'] = 'KIK48'; // Set this to an actual username
    $_SESSION['password'] = 'admin48';
}

$host = "localhost";
$user = "root";  // Default MySQL user in XAMPP
$pass = "";      // Default MySQL password in XAMPP (empty)
$dbname = "admin_panel"; // Your database name

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?> 




