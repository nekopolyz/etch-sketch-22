const container = document.querySelector('.container')


// CreateGrid function

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add('grid')
        container.appendChild(div)

    }
    hover()

}
createGrid(16)


// change color when mouse enter divs

function hover() {
    grid = document.querySelectorAll('.grid')
    grid.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.classList.add("hover");
        });
    });

}


// clear hover effect 

function clear() {
    let clear = document.querySelector('.clear')
    clear.addEventListener('click', () => {
        grid.forEach((grid) => {
            grid.classList.remove("hover");
        });
    });

}

clear()





