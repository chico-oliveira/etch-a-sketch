///////////////
// VARIABLES //
///////////////

const gridSquared = document.querySelector('.grid-grid');
const gridFlex = document.querySelector('.grid-flex'); // Flex Only
const clearButton = document.getElementById("clear");
const gridLength = 8; //2*2
const gridSize = 500;
const elementSize = ((gridSize-4)/gridLength); // Flex Only

/////////////////
// DOM METHODS //
/////////////////

clearButton.onclick = loadGrid;

///////////////
// FUNCTIONS //
///////////////

// Update CSS variables
let root = document.documentElement;
root.style.setProperty("--grid-length", gridLength);
root.style.setProperty("--grid-size", gridSize+"px");

loadGrid();

function loadGrid() {
    
    while (gridSquared.firstChild) {
        gridSquared.removeChild(gridSquared.firstChild);
        gridFlex.removeChild(gridFlex.firstChild);
    }

    // Grid
    for (let i=0; i<(gridLength ** 2); i++){
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridElement');
        gridDiv.style.borderStyle = "solid";
        gridDiv.style.borderWidth = "1px";
        gridDiv.style.borderColor = "black";
        gridSquared.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", color);
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

        gridDiv.addEventListener("mouseenter", color);
    }
}

function color(e){
    e.target.classList.add("colored");
}