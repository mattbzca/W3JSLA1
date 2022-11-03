//#1
let myGreeting = "Welcome to my page!";
//#2
console.log(myGreeting);
//#3
const pi = 3.14;
//#4 
pi != 2;//You get the console error "Uncaught TypeError TypeError: Assignment to constant variable." since you cannot redefine an established constant variable such as pi from 3.14 to 2.
//#5
let myNumber = 7;
//#6
Math.min(myNumber, pi);
let aVariable = Math.min(myNumber, pi)
console.log(aVariable); //The result at the minimum equals pi, or declared 3.14 because it's lesser than 7.

