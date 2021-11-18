///////////////
// VARIABLES //
///////////////

const gridSquared = document.querySelector('.grid-grid');
const gridFlex = document.querySelector('.grid-flex');
const gridCount = 2; //2*2
const gridSize = 496;
const elementSize = (gridSize/gridCount);

/////////////////
// DOM METHODS //
/////////////////

///////////////
// FUNCTIONS //
///////////////

for (let i=0; i<(gridCount ** 2); i++){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridElement');
    gridDiv.style.borderStyle = "solid";
    gridDiv.style.borderWidth = "2px";
    gridDiv.style.borderColor = "black";
    gridDiv.style.width = `${elementSize}px`;
    gridDiv.style.height = `${elementSize}px`;
    gridFlex.appendChild(gridDiv);
}

for (let i=0; i<(gridCount ** 2); i++){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridElement');
    gridDiv.style.borderStyle = "solid";
    gridDiv.style.borderWidth = "2px";
    gridDiv.style.borderColor = "black";
    gridDiv.style.width = `${elementSize}px`;
    gridDiv.style.height = `${elementSize}px`;
    gridSquared.appendChild(gridDiv);
}