document.addEventListener("DOMContentLoaded", () => {
    fetch("../json/data.json") // Load JSON file
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            const container = document.getElementById("card-container");

            // Loop through the JSON data and create cards
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("db-card");

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});