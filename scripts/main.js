let board = document.querySelector(".board");
let colorPicker = document.querySelector(".color-picker");
let button = document.querySelector(".color-btn");
let colorMode = "";
let boardColor = "white";
let click = true;

// Fix:
// - When you haven't select any mode, is not gonna have effect on the board
// - Being able to color just when you click and keep hold

function populateBoard(size) {
   let squares = board.querySelectorAll("div");
   squares.forEach((div) => div.remove()); // Reset board

   board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
   board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
   let amount = size * size;

   for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", colorSquare);
      square.style.backgroundColor = boardColor;
      square.style.border = "solid 1px black";
      board.insertAdjacentElement("beforeend", square);
   }
}
populateBoard(10); // default value (change this?)

function changeColor(choice) {
   colorMode = choice;
}

function colorSquare() {
   if (click) {
      if (colorMode === "color-btn") {
         this.style.backgroundColor = colorPicker.value;
      }
      if (colorMode === "rainbow-btn") {
         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }
      if (colorMode === "eraser-btn") {
         this.style.backgroundColor = boardColor;
      }
   }
}

function changeSize(userInput) {
   populateBoard(userInput);
   let numberSize = document.querySelector(".number-size");
   numberSize.textContent = `${userInput} x ${userInput}`;
}

function resetBoard() {
   let divs = document.querySelectorAll(".board div");
   divs.forEach((div) => {
      div.style.backgroundColor = "white";
   });
}

// If active button
// At all the best solution, but for now it works :D

let color = document.querySelector(".color-btn");
let rainbow = document.querySelector(".rainbow-btn");
let eraser = document.querySelector(".eraser-btn");

color.addEventListener("click", () => {
   if (color.classList.contains("active")) {
      color.classList.remove("active");
   } else {
      color.classList.add("active");
      rainbow.classList.remove("active");
      eraser.classList.remove("active");
   }
});

rainbow.addEventListener("click", () => {
   if (rainbow.classList.contains("active")) {
      rainbow.classList.remove("active");
   } else {
      rainbow.classList.add("active");
      color.classList.remove("active");
      eraser.classList.remove("active");
   }
});

eraser.addEventListener("click", () => {
   if (eraser.classList.contains("active")) {
      eraser.classList.remove("active");
   } else {
      eraser.classList.add("active");
      rainbow.classList.remove("active");
      color.classList.remove("active");
   }
});

// click event (Find a diferent way to manage this)
document.querySelector("body").addEventListener("click", () => {
   click = !click;
});
