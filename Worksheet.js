//Age
let age= prompt("how old are you?");
console.log( "I am"+" "+ age +" " + "years old");
//Name
let firstName= prompt("What is your First Name?");
let lastName= prompt("what is your Last Name?");
let fullName= firstName + " "+ lastName
console.log("My first name is" + " " + firstName + " " + "and my last name is" + " " + lastName + " " + "which means my full name is" + " " + fullName);
//Temp
let fahrenheit= prompt("What is the temperature outside?");
let fahrenheitToCelsiusFormula= (fahrenheit-32)* 5/9;
console.log(fahrenheit+" " + "degrees fahrenheit is" + " " + fahrenheitToCelsiusFormula + " " + "degrees Celsius.");
//Driving Age
let legalDrivingAge= 16;
let userAge= prompt("how old are you?");
if(userAge>= legalDrivingAge){console.log("You are old enought to drive!");}
else{console.log("You are not old enough to drive.");}
//Random number and colors
let number= Math.floor(Math.random() * 11);
console.log(number)
if (number= 0-2) {console.log("0 or 1 or 2");} 
else if (number= 3-5){console.log("3 or 4 or 5");}
else if (number= 6-8) {console.log("6 or 7 or 8;")}
else {console.log("9 or 10");}
//NFL Teams
let teamOne= "Packers"
switch(teamOne) {
    case "bears":
        console.log("Quarterback much?");
        break;
    case "Vikings":
        console.log("Loud noises!");
        break;
    case "Lions":
        console.log("They Bad");
        break;
    case "Packers":
        console.log("Best team in the world, actually the universe")
}
