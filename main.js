const container = document.querySelector('.container')


function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i =0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add('grid')
        container.appendChild(div)
    
    }

}


grid = document.querySelectorAll('.grid')
grid.forEach((grid) => {
    grid.addEventListener('mouseover', (e)=>{
        grid.classList.add("hover");
    });
});


createGrid(16)

