<?php
require 'db.php'; // Database connection file

$sql = "SELECT * FROM cards";
$result = $conn->query($sql);
?>

<link rel="stylesheet" href="../css/dashboard.css">
<link rel="stylesheet" href="../css/card.css">

<div class="content">
    <div id="card-container" class="card-container">
        <?php while ($row = $result->fetch_assoc()): ?>
            <a href="tables.php?table=<?= urlencode($row['table_name']); ?>" class="card-link">
                <div class="card">
                    <i class="bi <?= htmlspecialchars($row['icon']); ?>"></i> <!-- Bootstrap Icon -->
                    <h3><?= htmlspecialchars($row['table_name']); ?></h3> <!-- Use table_name instead of title -->
                    <p><?= htmlspecialchars($row['description']); ?></p>
                </div>
            </a>
        <?php endwhile; ?>
    </div>
</div>

