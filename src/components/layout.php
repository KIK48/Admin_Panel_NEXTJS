<?php
//session_start(); // Start session if needed for authentication
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/dashboard.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Sidebar -->
    <?php include __DIR__ . '/sidebar.php'; ?> <!-- Fix path -->

    <!-- Main Content -->
    <div id="main-content" class="main-content">
        <?php include __DIR__ . '/navbar.php'; ?> <!-- Fix path -->

        <!-- Dynamic Content -->
        <div class="content">
            <?php include __DIR__ . '/' . $page; ?> <!-- Ensure correct path -->
        </div>

    </div>

    <!-- Scripts -->
    <script src="../js/script.js"></script>
    
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

</body>
</html>
