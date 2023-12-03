const squares = document.getElementsByClassName('square');
const button = document.getElementById('button');
let isRed = false;

button.addEventListener('click', () => {
    if (!isRed) {
        button.style.backgroundColor = 'red';
        isRed = true;
    } else {
        button.style.backgroundColor = 'black';
        isRed = false;
    }
});

button.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        if ((i + 1) % 2 === 0) {
            if (squares[i].classList.contains('color')) {
                squares[i].classList.remove('color');
                squares[i].style.backgroundColor = 'gray';
            } else {
                squares[i].classList.add('color');
                squares[i].style.backgroundColor = 'red';
            }
        }
    }
    for (let i = 0; i < squares.length; i++) {
        if ((i + 2) % 2 === 0) {
            if (squares[i].classList.contains('color')) {
                squares[i].classList.remove('color');
                squares[i].style.backgroundColor = '#000';
            } else {
                squares[i].classList.add('color');
                squares[i].style.backgroundColor = 'green';
            }
        }
    }
});             
// ============================================= //
const bab = document.getElementById('bab');
const form = document.getElementById('form1');

