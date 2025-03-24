// Sidebar Toggle
document.getElementById("sidebarToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.querySelector(".main-content").classList.toggle("expanded");
});

// Chart.js Example
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dataset 1', 'Dataset 2', 'Dataset 3'],
            datasets: [{
                label: 'Example Data',
                data: [80, 60, 100],
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});