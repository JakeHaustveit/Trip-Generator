//Example function: 
function DisplayName(name){
	console.log(name); //this is the logic of the function
}

//The above function takes in a variable, known as the parameter.
//In this example, that variable is name.
//The function then prints to the console the value that is passed in 

// DisplayName("Mike");
// DisplayName("Ian");
// DisplayName("Nevin");

//Example 2
// function AddOneToNumber(number){ 
// 	let numberOne = 1;
// 	let addOne = number + numberOne;
// 	return addOne;
// }

// let result = AddOneToNumber(30);

//Above we are now calling the function. This means using the function that we wrote.
//Here we are passing in an actual value. In this case, the value is "mike"

//Problem 1
//Write a function that takes in two numbers
//The logic of the function should add those two numbers together and return a sum
//Capture the returned value in a variable and print it to the console

// function addTwoNumbers(numOne, numTwo){
// 	let results;
// 	results= parseFloat(numOne) + parseFloat(numTwo);
// 	return results;
// }
// numOne= prompt("enter number")
// numTwo= prompt("enter another number")
// let sum= addTwoNumbers(numOne, numTwo);
// console.log(sum)



//Problem 2
//Write a function that takes in two strings
//The logic of the function should concatenate those two strings together and return the concatenated result
//Capture the returned value in a variable and print it to the console

// function whatsYourName(firstName, lastName){
//     let fullName;
//     fullName= firstName+ " "+ lastName
//     return fullName
// }
// firstName= prompt("What is your first name?")
// lastName= prompt("What is your last name?")
// let birthName= whatsYourName(firstName, lastName)
// console.log(birthName)


//Problem 3
//Write a function that takes in a string
//The logic of the function should print each character of the string one at a time to the console
//HINT: for loop is one way to do this


// function iSpellGood(spell){
//     for(let char of spell)
//     console.log(char)
//     return;
// }




// spell= prompt("type any word")
// let word= iSpellGood(spell)





//Problem 4
//Write a function that takes in a string
//The logic of the function should print the string to the console but only if that string has three or more characters in it
//If it is less than three characters, then print to the console "we need a larger string to print!"


function wordPolice(){
    threeOrMore= prompt("pick a word")
    if(threeOrMore.length >= 3){
        console.log(threeOrMore)
    }
    else{console.log("we need a larger string to print")
    }
    return;
}

wordPolice()

