// ========================== //
const button = document.getElementById('butt')
const para = document.getElementById('para')
button.addEventListener('click', () => {
    if(button.innerText == 'hide') {
        para.style.display = 'none'
        button.innerText = 'show'
    }else if(button.innerText == 'show') {
        para.style.display = 'flex'
        button.innerText = 'hide'
    }
});

// =============================== //

const meow = document.getElementById('meow')
let i = 0
meow.addEventListener('click',() => {
    meow.innerText = i++
    if(meow.innerText == 20) {
        meow.style.backgroundColor = 'green'
        meow.innerText = 0
        i = 0
    }
});


    

    

