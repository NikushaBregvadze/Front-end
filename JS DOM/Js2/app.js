// const sportCars = ['ferrari','porche','subaru'];
// const familyCars = ['opeli','mitsubishi','lexus'];
// const allCars = [...sportCars,...familyCars]
// console.log(allCars);


// const car = {
//     name:'ferrari',
//     country:'italy',
// }
// const features = {
//     color:'red',
//     type:'hyperCar',
// }
// const carFeatures = {
//     ...car,...features,
//     owner:'Bregva',
//     price:'10000000000$'
// }
// console.log(carFeatures);

const myFunc = (a,b,...args) =>{
    console.log(a,b,args)
}
myFunc(4,10,15,16,17,18);