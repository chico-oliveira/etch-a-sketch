///////////////
// VARIABLES //
///////////////

const gridSquared = document.querySelector('.grid-grid');
const gridFlex = document.querySelector('.grid-flex'); // Flex Only
const gridLength = 16; //2*2
const gridSize = 500;
const elementSize = ((gridSize-4)/gridLength); // Flex Only

/////////////////
// DOM METHODS //
/////////////////

///////////////
// FUNCTIONS //
///////////////

// Update CSS variables
let root = document.documentElement;
root.style.setProperty("--grid-length", gridLength);
root.style.setProperty("--grid-size", gridSize+"px");

// Grid
for (let i=0; i<(gridLength ** 2); i++){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridElement');
    gridDiv.style.borderStyle = "solid";
    gridDiv.style.borderWidth = "1px";
    gridDiv.style.borderColor = "black";
    gridSquared.appendChild(gridDiv);
}


// Flex
for (let i=0; i<(gridLength ** 2); i++){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridElement');
    gridDiv.style.borderStyle = "solid";
    gridDiv.style.borderWidth = "1px";
    gridDiv.style.borderColor = "black";
    gridDiv.style.width = `${elementSize}px`;
    gridDiv.style.height = `${elementSize}px`;
    gridFlex.appendChild(gridDiv);
}
