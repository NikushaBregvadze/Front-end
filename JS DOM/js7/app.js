let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let desc1 = document.getElementById('descr1');
let desc2 = document.getElementById('descr2');
let bod = document.getElementById('body')
let span1 = document.getElementById('span1')
let span2 = document.getElementById('span2')
let button3 = document.getElementById('btn3')



btn1.addEventListener('click', () => {
    if (desc1.style.display !== 'none') {
        desc1.style.display = 'none';
        btn1.innerText = 'Click Show'
    } else {
        desc1.style.display = 'block';
        btn1.innerText = 'Click first'

    }
    x = console.log('u clicked');
     console.log(x);
    
    
});
btn2.addEventListener('click', () => {
    if (desc2.style.display !== 'none') {
        desc2.style.display = 'none';
        btn2.innerText = 'Click Show'

    } else {
        desc2.style.display = 'block';
        btn2.innerText = 'Click first'

    }
});




span1.addEventListener('click', () => {
    if (line == false) {
        span1.style.textDecoration = 'line-through 3px red';
        line = true;
    } else {
        span1.style.textDecoration = 'none';
        line = false;
    }
    
});
let line = false;
span2.addEventListener('click', () => {
    if (line === false) {
        span2.style.textDecoration = 'line-through 3px cyan';
        line = true;
    } else {
        span2.style.textDecoration = 'none';
        line = false;
    }
});
hide = false
button3.addEventListener('click',()=> {
   if(hide == false) {
    btn1.style.display='none'
    btn2.style.display='none'
    span1.style.display='none'
    span2.style.display='none'
    desc1.style.display='none'
    desc2.style.display='none'
    button3.innerText = 'Click to Show'
    
    hide = true
   }else if(hide == true) {
    btn1.style.display='block'
    btn2.style.display='block'
    span1.style.display='block'
    span2.style.display='block'
    desc1.style.display='block'
    desc2.style.display='block'
    hide = false
    button3.innerText='Click to Hide'
   }else {
    
   }
})
hide = false


