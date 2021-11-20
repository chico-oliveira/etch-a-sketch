///////////////
// VARIABLES //
///////////////

const DEFAULT_GRID_LENGTH = 8;
const DEFAULT_COLOUR = "blue";
const DEFAULT_BRIGHTNESS = 100;

const root = document.documentElement;
const gridSquared = document.querySelector('.grid');
const sizeText = document.querySelector('.grid-length');
const clearButton = document.getElementById("clear");

let gridLength = DEFAULT_GRID_LENGTH;
let selectedColour = DEFAULT_COLOUR;
let currentColour = DEFAULT_COLOUR;
let brightness = DEFAULT_BRIGHTNESS;

/////////////////
// DOM METHODS //
/////////////////

clearButton.onclick = clearGrid;

///////////////
// FUNCTIONS //
///////////////

// Initialize first grid after DOM and CSS finishes loading
window.onload = () => {
    updateCSS();
    loadGrid();
}

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

        gridDiv.addEventListener("mouseenter", colour);
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
    root.style.setProperty("--selected-colour", currentColour);
}

function colour(e){
    randomColour(e);
    e.target.style.backgroundColor = currentColour;
}

function randomColour(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    currentColour = `rgb(${r}, ${g}, ${b})`;
    updateCSS();
}

function greyScale(e){
    let bgColour = e.target.style.backgroundColor;
    
    // Checks if the grid element has already started a gradient
    if (e.target.classList.length < 2){
        e.target.classList.add("grey");
        currentColour = "rgba(0, 0, 0, 0.1)";
    }
    // Mid-gradient, increment alpha
    else if (bgColour.indexOf("rgba") !== -1) {
        let alpha = Number(bgColour.slice(-4, -1));
        if (alpha < 1){
            alpha += 0.1;
            currentColour = `rgba(0, 0, 0, ${alpha})`;
        }
    }
    // If the gradient has finished, square stays black
    else {
        currentColour = "black";
    }
}