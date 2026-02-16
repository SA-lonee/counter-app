// Load saved count
let count = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"))
    : 0;

const countDisplay = document.getElementById("text");
const increaseBtn = document.getElementById("inBtn");
const decreaseBtn = document.getElementById("deBtn");
const resetBtn = document.getElementById("reset");
const toggleThemeBtn = document.getElementById("themeBtn");

const MAX = 10;
const MIN = -10;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

// Update display
function updateDisplay(type = "") {
    countDisplay.textContent = count;

    // Save count
    localStorage.setItem("count", count);

    // Color logic
    if (type === "increase") {
        countDisplay.style.color = "#2e7d32"; // green
    } else if (type === "decrease") {
        countDisplay.style.color = "#c62828"; // red
    } else {
        countDisplay.style.color = "";
    }

    // Animation
    countDisplay.style.transform = "scale(1.2)";
    setTimeout(() => {
        countDisplay.style.transform = "scale(1)";
    }, 150);
}

// Show initial value
updateDisplay();

// Increase
increaseBtn.addEventListener("click", () => {
    if (count < MAX) {
        count++;
        updateDisplay("increase");
    }
});

// Decrease
decreaseBtn.addEventListener("click", () => {
    if (count > MIN) {
        count--;
        updateDisplay("decrease");
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Keyboard Support
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && count < MAX) {
        count++;
        updateDisplay("increase");
    }
    if (event.key === "ArrowDown" && count > MIN) {
        count--;
        updateDisplay("decrease");
    }
    if (event.key === "Enter") {
        count = 0;
        updateDisplay();
    }
});

// Theme toggle
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

