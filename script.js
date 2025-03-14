// Function to toggle Sidebar Menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Function to Update Water Level in Tank
function updateWaterLevel() {
    let input = document.getElementById("water-input").value;
    let waterLevel = document.getElementById("water-level");
    let waterText = document.getElementById("water-text");

    // Validate input value
    if (input >= 0 && input <= 100) {
        waterLevel.style.height = input + "%";
        waterText.innerText = input + "%";
    } else {
        alert("Please enter a valid percentage between 0 and 100.");
    }
}

// Add Click Event to Cards
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            alert("You clicked on: " + card.innerText);
        });
    });
});
