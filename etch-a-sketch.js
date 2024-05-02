function generateBoard(size) {
    let sketch_container = document.querySelector('.container');
    sketch_container.innerHTML = '';

    let row = sketch_container.appendChild(document.createElement('div'));
    row.setAttribute('class', 'row');

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let div = row.appendChild(document.createElement('div'));
            div.setAttribute('id', (i * 16) + j);
            div.setAttribute('class', 'sketch-grid-item');
            div.addEventListener("mouseover", () => {
                div.style.background = "black";
            });
        }
        row = sketch_container.appendChild(document.createElement('div'));
        row.setAttribute('class', 'row');
    }
}

function getDimension() {
    let dimension = prompt("Enter size:");
    if(dimension > 100) {
        alert("Limiting to 100 to save resources.");
        dimension = 100;
    }
    return dimension;
}

const button = document.querySelector("#newGridButton");
button.addEventListener('click', () => {
    const dimension = getDimension();
    generateBoard(dimension);
})
