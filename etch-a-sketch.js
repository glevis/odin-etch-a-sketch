let sketch_container = document.querySelector('.container');
let row = sketch_container.appendChild(document.createElement('div'));
row.setAttribute('class', 'row');

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
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
