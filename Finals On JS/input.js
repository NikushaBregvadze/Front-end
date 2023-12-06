let meow = document.getElementById('name');
let Lastname = document.getElementById('lastname');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let city = document.getElementById('city');
let about = document.querySelector('#about')
let btn = document.getElementById('btn');
let Name1 = document.getElementById('name1');
let Lastname1 = document.getElementById('lastname2');
let phone1 = document.getElementById('phone1');
let email1 = document.getElementById('email1');
let city1 = document.getElementById('city1');
let scsa = document.getElementById('scsa');
let lete = document.getElementById('btn3')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let nameValue = meow.value;
    let lastnameValue = Lastname.value;
    let phoneValue = phone.value;
    let emailValue = email.value;
    let cityValue = city.value;
    let aMeaning = about.value;

    localStorage.setItem("name", nameValue);
    localStorage.setItem("lastname", lastnameValue);
    localStorage.setItem("phone", phoneValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("city", cityValue);
    localStorage.setItem("about", aMeaning);
  
    for (let i = 0; i < localStorage.length; i++) {
        Name1.textContent = localStorage.getItem("name");
        Lastname1.textContent = localStorage.getItem("lastname",);
        phone1.textContent = localStorage.getItem('phone')
        city1.textContent = localStorage.getItem("city");
        email1.textContent= localStorage.getItem('email')
    
    }
    lete.addEventListener('click', () => {
        if (
            Name1.textContent == localStorage.getItem("name") ||
            Lastname1.textContent == localStorage.getItem("lastname") ||
            phone1.textContent == localStorage.getItem('phone') ||
            city1.textContent == localStorage.getItem("city") ||
            email1.textContent == localStorage.getItem("email")
        ) {
            Name1.innerText = '';
            Lastname1.innerText = '';
            city1.innerText = '';
            email1.innerText = '';
            phone1.innerText = '';
        }
    });
   
});

