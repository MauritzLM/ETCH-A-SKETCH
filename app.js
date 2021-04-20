const mainDiv = document.querySelector('.container')
let div;
let small_div;

function createSquare() {
    for (let i = 0; i < 16; i++) {
        div = document.createElement('div');
        div.classList.add('medium-div');
        mainDiv.appendChild(div);
        for (let j = 0; j < 16; j++) {
            small_div = document.createElement('div');
            small_div.classList.add('small-div')
            div.appendChild(small_div);
        }

    }
}