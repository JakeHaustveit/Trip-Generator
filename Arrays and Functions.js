//First Problem
let recipe= ["noodles", "sauce", "protien"] 
let noodle= recipe[0]
function arrayLogger(someArray){
    console.log(someArray);
    return;
}
arrayLogger(noodle)

//Second Problem

let colors= ["blue", "red", "white", "green", "yellow"]

let whatColor= prompt("Please pick a color")

function colorIdentifier(whatColor){
    if(whatColor!== colors){
       whatColor= prompt("Please pick again")
    }
    else{
        console.log("You found my color!")
    }

return;   
}
let pickColor= colorIdentifier(whatColor)
let number=[1, 2, 3, 4, 5, 6, 7];
let sum= 0

//Third Problem


function mathGuru(number){
   for( let i =0; i < number.length; i++){
       sum += number[i]
       console.log(sum)
   }
    if(sum%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
let answer= mathGuru(number)


//Fourth Problem


let array=[1, 5, 10, 15, 20, 25, 30]
let whoKnows= prompt("enter number between 1 and 30")
function highOrLow(whoKnows){
    for(let i=0; i< array.length; i++){
        if(array[i]>whoKnows){
            console.log(array[i])
        }
    }
}
let answer= highOrLow(whoKnows)