const container = document.querySelector('#container');

// 
let size = 100;
let total = size * size;


// a help function to generate the cell id name it takes a number and adds zeroes to fit the total ammount of cells.
function addZeroes(number,total){
  let str = "" + number;
  let pad = "0".repeat(total.toString().length);
  return pad.substring(0,pad.length - str.length) + number;
}

//a hoover function
function  hoover(){
  console.log(`hooverd over `)
};



//a for loop creating the total amount of cells
for (let cellN = 1; cellN<=total; cellN++){
  const div = document.createElement("div");
  div.className = "cell";
  div.id = `c${addZeroes(cellN,total)}`;
  div.style.width = `${(960/size)-(3*size)}px`;
  div.style.height = `${(960/size)-(3*size)}px`;
  container.appendChild(div);
}

//an array with all cells, for every cell in the array I add an event listener 
//triggering a callback function to change the backgroundcolor to black  
const cellsArray = document.querySelectorAll(".cell");
let arrayLen = cellsArray.length;
for (let i = 0;i < arrayLen; i++){
  cellsArray[i].addEventListener("mouseover", function(e) {
    e.target.style.background = "black";
  });
}

//a reset button
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener('click', function() {
  for (let i = 0; i < arrayLen;i++){
    cellsArray[i].style.background = "white"
  }
});

