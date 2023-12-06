let header = document.createElement('div');
let header_inner1 = document.createElement('div');
let header_inner2 = document.createElement('div');
let header_inner3 = document.createElement('div');
let img = document.createElement('img');
let ahref = document.createElement('a');
let ahref1 = document.createElement('a');
let ahref2 = document.createElement('a');
let icon = document.createElement('i')
let icon1 = document.createElement('i')
let icon2 = document.createElement('i')
let head2 = document.createElement('div')
head2.className = 'head2'
ahref.innerText = 'Home'
ahref1.innerText = 'FAQ'
ahref2.innerText = 'Contact'
icon.className = 'fa-brands fa-facebook icon'
icon1.className = 'fa-brands fa-github icon1'
icon2.className = 'fa-brands fa-linkedin icon2'


img.setAttribute('src', 'assets/logo.png');
document.body.appendChild(header)
header.classList.add('head');
header_inner1.classList.add('logo');
header_inner2.classList.add('NavBar'); 
header_inner3.classList.add('Social'); 

header_inner2.appendChild(ahref)
header_inner2.appendChild(ahref1)
header_inner2.appendChild(ahref2)
header_inner3.appendChild(icon)
header_inner3.appendChild(icon1)
header_inner3.appendChild(icon2)
header.appendChild(head2);
head2.appendChild(header_inner1)
head2.appendChild(header_inner2)
head2.appendChild(header_inner3)
header_inner1.appendChild(img)
ahref.setAttribute('href' , '#')
ahref1.setAttribute('href' , 'FAQ.html')
ahref2.setAttribute('href' , '#')
document.body.insertBefore(header, document.body.firstChild);
//======================================//







