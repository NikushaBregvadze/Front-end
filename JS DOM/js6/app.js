//TASK 1

let arr = [5, 10, 13, 60];
let x = (arr.reverse());
console.log(x.toString());


let arr1 = [1, 15, 23, 5,6];
let empty = []
function scsa(arr1) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i]> 10) {
            empty.push(arr1[i])
        }
    }
    
    
}
console.log(scsa(arr1));
console.log(empty);

let East = ['Tbilisi', 'Gori', 'Rustavi'];
let West = ['Tskhaltubo', 'Kutaisi', 'Zugdidi'];
console.log(West.pop(),);
console.log(West);
console.log(West.indexOf('Zugdidi'));
let city = []
console.log(East.push(city));
