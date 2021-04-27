const mainDiv = document.querySelector('.container');
const button = document.querySelector('button');

let div;
let small_div;
let num;

function createSquare(num) {
    for (let i = 0; i < num; i++) {
        div = document.createElement('div');
        div.classList.add('medium-div');
        mainDiv.appendChild(div);
        mainDiv.style.gridTemplateColumns = `repeat(${num}, 1fr`;
        for (let j = 0; j < num; j++) {
            small_div = document.createElement('div');
            small_div.classList.add('small-div')
            div.appendChild(small_div);
            small_div.addEventListener('mouseenter', randColor);

        }
    }
}

createSquare(16);

button.addEventListener('click', (e) => {
    let first = mainDiv.firstElementChild;
    while (first) {
        first.remove();
        first = mainDiv.firstElementChild
    }
    inputSquares()
});

function inputSquares(num) {
    num = parseInt(prompt('How many squares per side? '));
    if (num > 100) {
        num = parseInt(prompt('Enter a number less than 100'))
    }
    createSquare(num)
}

function randColor(e) {
    const r = Math.floor(Math.random() * 265);
    const g = Math.floor(Math.random() * 265);
    const b = Math.floor(Math.random() * 265);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}