///////////////
// VARIABLES //
///////////////

const DEFAULT_GRID_LENGTH = 8;
const DEFAULT_COLOUR = "blue";
const DEFAULT_MODE = "standard";

const root = document.documentElement;
const gridSquared = document.querySelector('.grid');
const sizeText = document.querySelector('.grid-length');
const clearButton = document.getElementById("clear");
const modeButtons = document.querySelectorAll('.mode');
let divs = document.querySelectorAll(".gridElement");

let gridLength = DEFAULT_GRID_LENGTH;
let standardColour = DEFAULT_COLOUR;
let currentColour = DEFAULT_COLOUR;
let currentMode = DEFAULT_MODE;

/////////////////
// DOM METHODS //
/////////////////

clearButton.onclick = clearGrid;
modeButtons.forEach(button => {
    button.addEventListener('click', activateMode);
});

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

    // Updates grid elements
    divs = document.querySelectorAll(".gridElement")

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
}

function colour(e){
    if(currentMode === "standard"){
        currentColour = standardColour;
    }
    else if(currentMode === "rainbow"){
        currentColour = randomColour();
    }
    else {
        currentColour = greyScale(e.target);
    }

    // Paints div
    e.target.style.backgroundColor = currentColour;
}

function randomColour(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}

function greyScale(div){
    let bgColour = div.style.backgroundColor;
    
    // Checks if the grid element has already started a gradient
    if (div.classList.length < 2){
        div.classList.toggle("grey", true);
        return "rgba(0, 0, 0, 0.1)";
    }
    // Mid-gradient, increment alpha
    else if (bgColour.indexOf("rgba") !== -1) {
        let alpha = Number(bgColour.slice(-4, -1));
        if (alpha < 1){
            alpha += 0.1;
            return `rgba(0, 0, 0, ${alpha})`;
        }
    }
    // If the gradient has finished, square stays black
    else {
        return "black";
    }
}

function activateMode(e){
    // Deselects all buttons and then activates one
    modeButtons.forEach(button => {
        button.classList.toggle("selected", false);
    });
    e.target.classList.toggle("selected", true);

    // Activates colour mode
    buttonText = e.target.textContent;
    let mode = buttonText.substring(0, buttonText.indexOf(' '));
    currentMode = mode.toLowerCase();

    // Removes grey-scale 
    if(currentMode !== "greyscale"){
        divs.forEach(element => {
            element.classList.toggle("grey", false);
        });
    }
}
