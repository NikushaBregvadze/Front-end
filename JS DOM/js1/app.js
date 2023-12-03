// Task 1

function prom2t() {
   let name = prompt('შეიყვანე სახელი')
   let age = prompt('შეიყვანე ასაკი')
   if(age >= 17) {
        console.log(`${name + age} თქვენ გაქვთ უფლება მართვის`);
   }else if (age < 17) {
        console.log(`${name + age} თქვენ არ გაქვთ უფლება მართვის`);
    
   }
    
   
    
   
}
console.log(prom2t());


// Task 2 


function num(number1, number2) {
     if(number1>number2) {
          console.log("number 1 bigger than number 2");
     }else if(number2>number1)  {
          console.log('number 2 is bigger than number 1');
     }else {
          console.log('number 2 equals to number 1');
     }
}
console.log(num(10,10));

// Task 3


function dogAge(Age) {
     let x = Age * 7
     console.log(`dog age is : ${x} years in human Ages` );
}
dogAge(30)


// Task 4


const dinamogoals = 33
const torpedoGoals = 40
const gamePlayed = 10

const GoalScoreRatio = (dinamogoals,torpedoGoals,gamePlayed) => {
     const dinamoRatio = dinamogoals / gamePlayed;
     const torpedoRatio = torpedoGoals / gamePlayed;
     return [torpedoRatio,dinamoRatio]
}
const [dinamoRatio,torpedoRatio] = GoalScoreRatio(dinamogoals,torpedoGoals,gamePlayed)
console.log(`Dinamo's Score Ratio is : ${dinamoRatio}`);
console.log(`Torpedo's Score Ratio is : ${torpedoRatio}`);