let restaurant= ["Chick-Fil-A", "Los Betos", "Mission BBQ", "#1 Chinese Food", "Hooter's"]
let destination= ["Grand Canyon", "North Fork, ID", "Key West, FL", "Billings, MT"]
let activities= ["Fly fishing", "Mountian biking", "Overnight Camping", "Bar Hoping"]
let newWheels= ["Ford F-150", "Jeep Grand Charokee", "Volkswagon Bus", "Mazda Miata"]


//main function arrayPicker
// function randomPicker(array){
//     let arrayItemRandom= array[Math.floor(Math.random() * array.length)]
//     return arrayItemRandom;
// }


function randomPicker(array){
    let arrayItemRandom= array[Math.floor(Math.random() * array.length)]
    return arrayItemRandom;
}











let food= randomPicker(restaurant)
let place= randomPicker(destination)
let fun= randomPicker(activities)
let whip= randomPicker(newWheels)



 
(confirmPicker(food, randomPicker(restaurant)))
(confirmPicker(place, randomPicker(destination)))
(confirmPicker(fun, randomPicker(activities)))
(confirmPicker(whip, randomPicker(newWheels)))


function confirmPicker(random, array){
    let randomItem= confirm(`Your option is ${random}\n Are you happy with this?`)
    if(randomItem == true){
        return(random);
    }
    else{
        let randomItemTwo= randomPicker(array)
        randomItemTwo= confirm(`Your new option is ${array}`)           
    
    return(array)}

}




// function confirmPicker(random, array){
//     let randomItem= confirm(`Your option is ${random}\n Are you happy with this?`)
//     if(randomItem == true){
//         return(random);
//     }
//     else{
//         let randomItemTwo= randomPicker(array)
//         randomItemTwo= confirm(`Your new option is ${array}\n Do you want this?`)
//     while(randomItemTwo == true){
//        let randomItemTWo= randomPicker(array)
             
//     }
//     return(array)}

// }






//Trip Prompt
function tripPlanner(){
     alert(`Your itinerary has you eating at  ${randomPicker(restaurant)}\n You will be driving a ${randomPicker(newWheels)}\n to ${randomPicker(destination)}\n where you will be doing ${randomPicker(activities)}\n Have a wonderful trip!`)
}




















// let resterauntAnswer= confirm (`Your restaurant is ${randomPicker(restaurant)}\n Do you want to eat here?`) 

// let restaurantAnswerTwo

// {
//     while( resterauntAnswer != true){
//         let restaurantAnswerTwo= confirm(`Your new restaurant is ${randomPicker(restaurant)}\n Does this work?`)
//         if(restaurantAnswerTwo == true){
//             let resterauntAnswer=== true
//         }
//         else{
//             restaurantAnswerTwo= confirm(`Your new restaurant is ${randomPicker(restaurant)}\n Does this work?`);
//     }
//  }
//  return(food)

// }



// randomPicker(destination)
// randomPicker(activities)
// randomPicker(newWheels)



// let restaurantTwo= confirm (`Your restaurant is ${randomPicker(restaurant)}\n Do you want to eat here?`)
// let restaurantAnswer= randomPicker(restaurant)

// while(restaurantTwo!=true){
//     confirm(`Your new restaurant is ${randomPicker(restaurant)}`)
//     if(restaurantTwo != true) { confirm(`New restaurant is ${randomPicker(restaurant)}`)
//     }
//     else{console.log(randomPicker(restaurant))
//     }
// }
       

    


// let destinationTwo= confirm(`Your destination is ${randomPicker(destination)}\n Do you want to go here?`)
// while(destinationTwo !=true){
//     randomPicker(destination)
//     confirm(`Your new restaurant is ${randomPicker(destination)}`)
// }

// let activitiesTwo= confirm(`Your activity is ${randomPicker(destination)}\n Do you want to go here?`)
// while(activitiesTwo !=true){
//     randomPicker(destination)
//     confirm(`Your new activity is ${randomPicker(activities)}`)
// }

// let newWheelsTwo= confirm(`Your vehicle is ${randomPicker(newWheels)}\n Do you want to go here?`)
// while(activitiesTwo !=true){
//     randomPicker(newWheels)
//     confirm(`Your new activity is ${randomPicker(newWheels)}`)
// }
