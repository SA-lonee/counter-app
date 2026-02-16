
let button1 = document.getElementById("inBtn");
let button2 = document.getElementById("deBtn");
let button3 = document.getElementById("reset");
let button4 = document.getElementById("themeBtn");
let text = document.getElementById("text");

let count = 0;
let min = -10;
let max = 10;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") button1.click();
    if (event.key === "ArrowDown") button2.click();
    if (event.key === "Enter") button3.click();
});

button1.addEventListener("click", function() {
    if (count < max) {
        count++;
        updateDisplay();
    }
});

button2.addEventListener("click", function() {
    if (count > min) {
        count--;
        updateDisplay();
    }
});

button3.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});

button4.addEventListener("click", function() {
    document.body.classList.toggle("light");
});

function updateDisplay(){
    text.style.opacity = "0";
    text.style.transform = "translateY(10px)";

    setTimeout(() => {
        text.innerText = count;
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
    }, 150);

    updateColor();

    button1.disabled = count >= max;
    button2.disabled = count <= min;
}

function updateColor() {
    if(count > 0){
        text.style.color = "#c89f7a";
    }
    else if(count < 0){
        text.style.color = "#b35c44";
    }
    else{
        text.style.color = "";
    }
}

updateDisplay();
