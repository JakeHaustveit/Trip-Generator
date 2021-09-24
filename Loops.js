for(let i=0; i < 5; i++){
    console.log("hello")
}
for(let i=0; i<=10; i++){
    console.log(i)
}
for(let i=10; i>=0; i--){
    console.log(i)
}
//devCodeCamp
let number=prompt("enter number")
for(let i=0; i< number; i++){
    console.log("devCodeCamp")
}
//Packers
for(let char of "packers") {
    console.log(char);
}
//Buzzfizz
for(let i=0; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("buzzfizz")
    }
    else if(i%5===0){
        console.log("buzz")
    }
    else if (i%3===0){
        console.log("fizz")
    }
    else{console.log(i)}
}
//while
let counter= 1
while(counter< 60){
    console.log("Hello!");
    counter++;
}
let password= "password"
let userInput
while(password != userInput){
    userInput= prompt("Enter password.")
    if(userInput == password){
        console.log("User Validated")
        
    }
    else{prompt("Enter password.")
       
    }
}
