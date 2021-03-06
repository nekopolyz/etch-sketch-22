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

        //opacity is the lightness of hsl 0=black
        let opacity = 50;
        grid.addEventListener('mouseover', () => {
            // grid.classList.add("hover");
            opacity -= 5;
            grid.style.background = `hsl(${randomColor()}, +${randomColor()}%, ${opacity}%)`

        });
    });

}
// random color to RGB
function randomColor() {
    let color = Math.floor(Math.random() * 256);
    return color;
}


// clear hover effect and send prompt for grid size

function clear() {
    let clear = document.querySelector('.clear')


    clear.addEventListener('click', () => {
        //clear grid container and while loop to send prompt if out of range
        container.textContent = ""
        let size = prompt("Enter Grid size (Maximum 100)")
        while (size < 1 || size > 100) {
            size = prompt("Out of Range, Maximum 100")
        }
        createGrid(size)
        grid.forEach((grid) => {
            grid.classList.remove("hover");
        });

    });


}

clear()





