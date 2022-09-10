
const buttonColor = document.querySelector("#button-random-color");
let colors = document.querySelectorAll(".variable")

const colorsPalette = [];


function createPalette() {
    
    for (let index = 0; index < colors.length; index++) {

        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        let boxColor = "rgb(" + r + "," + g + "," + b + ")"

        colors[index].style.backgroundColor = boxColor;

        colorsPalette.push(boxColor)
    }

    localStorage.setItem('colorsPalette', JSON.stringify(colorsPalette));

}

buttonColor.addEventListener("click", createPalette)

const criarGrid = document.querySelector("#pixel-board");


function createline() {
    for (let index = 0; index < 5; index++) {
        const line = document.createElement("div");
        line.className = "linha";
        line.id = "linha" + index;
        criarGrid.appendChild(line);
    }
}
createline()

const linhas = document.querySelectorAll(".linha")

function createDiv() {
    for (let i = 0; i < linhas.length; i++) {
        for (let index = 1; index <= 5; index++) {
            const div = document.createElement("div");
            div.className = "pixel";
            linhas[i].appendChild(div);
        }

    }

}

createDiv()

// requisito 5
/* 
function saveColors() {
    let colorsPalette = localStorage.getItem("colorsPalette");
    colorsPalette = JSON.parse(colorsPalette)

    for (i = 0; i < colorsPalette.length; i++) {
        const coresPadrao = colors[i]
        coresPadrao.style.backgroundColor = colorsPalette[i];
    }
}  */

function saveColors() {

    let colorsPalette = localStorage.getItem("colorsPalette");

    colors[0].style.backgroundColor = JSON.parse(colorsPalette)[0];
    colors[1].style.backgroundColor = JSON.parse(colorsPalette)[1];
    colors[2].style.backgroundColor = JSON.parse(colorsPalette)[2];

} 

saveColors() 

//requisito9
let squarecolors = document.querySelectorAll(".color")

function putSelected(evt){

    document.querySelector(".selected").classList.remove("selected") 

    evt.target.classList.add("selected")
}

for (add = 0; add < squarecolors.length; add++){
    squarecolors[add].addEventListener("click", putSelected);

}

