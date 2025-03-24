// Sidebar Toggle
document.getElementById("sidebarToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.querySelector(".main-content").classList.toggle("expanded");
    
});