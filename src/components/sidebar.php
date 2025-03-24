<?php
// Define menu items
$menu_items = [
    ["title" => "Dashboard", "url" => "../index.php?page=dashboard", "icon" => "bi-house-door"],
    ["title" => "Management", "url" => "../index.php?page=card", "icon" => "bi-database"],
    ["title" => "Tables", "url" => "../index.php?page=tables", "icon" => "bi-diagram-3"],
    ["title" => "Panel Test", "url" => "../index.php?page=panel_test", "icon" => "bi-people"],
    ["title" => "Settings", "url" => "../index.php?page=settings", "icon" => "bi-gear"]
];


// Get the current page to highlight active menu item
$current_page = basename($_SERVER['PHP_SELF']);
?>

<div id ="sidebar" class="sidebar">
    <!-- Sidebar Header -->
    <div class="sidebar-header">
    <h2 id="sidebar-logo">ZHEA</h2>
    </div>

    <ul class="sidebar-menu">
        <?php foreach ($menu_items as $item): ?>
            <li>
                <a href="<?= $item['url']; ?>" class="nav-link text-white <?= ($current_page == basename($item['url'])) ? 'active' : ''; ?>" title="<?= $item['title']; ?>">
                    <i class="bi <?= $item['icon']; ?>"></i>
                    <span class="sidebar-text"><?= $item['title']; ?></span>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>
