const container = document.querySelector("#container");

// a range slider asking the user the size of the grid and displaying current size
const slider = document.getElementById("myRange");
const sliderDisplay = document.getElementById("sliderDisplay");
sliderDisplay.innerHTML = `Gridsize: ${slider.value} x ${slider.value}`

//initialising the starting grid:
let gridSize = slider.value;
let total = gridSize * gridSize;
let hooverMode = "default"
createGrid(gridSize);
createCells(total,1000,gridSize);
Hoover()
eraser()
reset()
rainbow()

slider.oninput = function() {
  sliderDisplay.innerHTML = `Gridsize: ${this.value} x ${slider.value}`;
  container.replaceChildren();
  gridSize = slider.value;
  total = gridSize * gridSize;
  hooverMode = "default";
  createGrid(gridSize);
  createCells(total,1000,gridSize);
  Hoover()
  eraser()
  reset()
  rainbow()
  console.log(slider.value);
}


function createGrid(grdSz){
  let strToAppend = "";
  for (let i = 0;i<grdSz;i++){
    strToAppend += "auto ";
  };  
  document.getElementById("container").style.display = "grid";
  document.getElementById("container").style.gridTemplateColumns = strToAppend;

};

// a help function to generate the cell id name it takes a number and adds zeroes to fit the total ammount of cells.
function addZeroes(number,total){
  let str = "" + number;
  let pad = "0".repeat(total.toString().length);
  return pad.substring(0,pad.length - str.length) + number;
}

//a function with a for loop creating the total amount of cells
function createCells(total,containerSize,gridSize){  
  for (let cellN = 1; cellN<=total; cellN++){
    const div = document.createElement("div");
    div.className = "cell";
    div.id = `c${addZeroes(cellN,total)}`;
    div.style.width = "auto";  
    div.style.height = "auto";
    div.style.display = "grid"
    container.appendChild(div);
  };
};

//a function with an array with all cells, for every cell in the array I add an event listener 
//triggering a callback function to change the backgroundcolor to black  
function Hoover(){
  const cellsArray = document.querySelectorAll(".cell");
  let arrayLen = cellsArray.length;
  for (let i = 0;i < arrayLen; i++){
    cellsArray[i].addEventListener("mouseover", function(e) {
      if (hooverMode === "default") {e.target.className = "cellBlack"
      } else if (hooverMode === "eraser") {e.target.className = "cell";
        e.target.style = "display: grid";
      } else if (hooverMode === "rainbow") {
        e.target.className = "cellRainbow";
        e.target.style.backgroundColor = randomRGB();
      };
    });
  };
};

//a function that returns a random RGB value 
function randomRGB(){
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return `rgb(${R}, ${G}, ${B})`
}

//add event listener to eraser buton
function eraser(){
  const eraserBtn = document.querySelector("#eraser");
  eraserBtn.addEventListener("click", function(){
    hooverMode = "eraser";
  });
};

//add event listener to rainbow button
function rainbow(){
  const rainbowBtn = document.querySelector("#rainbowBtn");
  rainbowBtn.addEventListener("click", function(){
    hooverMode = "rainbow";
  });
};

// a reset button, by clicking it loops thrue all cells in cellsArray an changes the className (back) to "cell"
function reset(){
  const cellsArray = document.querySelectorAll(".cell");
  let arrayLen = cellsArray.length;
  const resetBtn = document.querySelector("#resetBtn");
  resetBtn.addEventListener("click", function(){
    for (let i = 0; i < arrayLen; i++) {
      cellsArray[i].style = "display: grid"
      cellsArray[i].className = "cell";
      hooverMode = "default"
    }
  });
};



