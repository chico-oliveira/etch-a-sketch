///////////////
// VARIABLES //
///////////////

const root = document.documentElement;
const gridSquared = document.querySelector('.grid');
const sizeText = document.querySelector('.grid-length');
const clearButton = document.getElementById("clear");
const gridSize = 550;
let gridLength = 8;

/////////////////
// DOM METHODS //
/////////////////

clearButton.onclick = clearGrid;

///////////////
// FUNCTIONS //
///////////////

// Initialize first grid
updateCSS();
loadGrid();

function loadGrid() {
    
    // Removes previous grid
    while (gridSquared.firstChild) {
        gridSquared.removeChild(gridSquared.firstChild);
    }

    // Creates new grid
    for (let i=0; i<(gridLength ** 2); i++){
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridElement');
        gridSquared.appendChild(gridDiv);

        gridDiv.addEventListener("mouseenter", color);
    }

    // Updates length display
    sizeText.textContent = `${gridLength} × ${gridLength}`;
}

function clearGrid(){
    gridLength = parseInt(prompt("Define the grid length: "));
    updateCSS();
    loadGrid();
}

function updateCSS(){
    root.style.setProperty("--grid-length", gridLength);
    root.style.setProperty("--grid-size", gridSize+"px");
}

function color(e){
    e.target.classList.add("colored");
}
