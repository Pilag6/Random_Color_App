const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const square = document.querySelector(".square");

btn.addEventListener("click", function () {
    // #B24A5A
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    square.style.backgroundColor = hexColor
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); //Math.round(Math.random() * (max - min)) + min
}

