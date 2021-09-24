let restaurant= ["Chick-Fil-A", "Los Betos", "Mission BBQ", "#1 Chinese Food", "Hooter's"]
let destination= ["Grand Canyon", "North Fork, ID", "Key West, FL", "Billings, MT"]
let activities= ["Fly fishing", "Mountian biking", "Overnight Camping", "Bar Hoping"]
let newWheels= ["Ford F-150", "Jeep Grand Charokee", "Volkswagon Bus", "Mazda Miata"]


function tripPlanner(){
    console.log(`Your itinerary has you eating at  ${randomPicker(restaurant)}\n You will be driving a ${randomPicker(newWheels)}\n to ${randomPicker(destination)}\n where you will be doing ${randomPicker(activities)}\n Have a wonderful trip!`)
   

}




// function resterauntPicker(){
//     let resterauntRandom= resteraunt[Math.floor(Math.random() * resteraunt.length)]
//     console.log(resterauntRandom)
//   let resterauntAnswer= confirm (`Your restaurant is ${resterauntRandom}\n Do you want to eat here?`)
//    while(resterauntAnswer != true){
//     resterauntRandom= resteraunt[Math.floor(Math.random() * resteraunt.length)]
//     let resterauntAnswerTwo= confirm("does this work?")
//     if(resterauntAnswerTwo != true){
//         confirm("does this work?");
//         return resterauntRandom
//     }
//     else{
//         return;
//     }  
//    }  
   
// }

function randomPicker(array){
    let arrayItemRandom= array[Math.floor(Math.random() * array.length)]
    return arrayItemRandom;


}

// randomPicker(restaurant)
// randomPicker(destination)
// randomPicker(activities)
// randomPicker(newWheels)



let restaurantTwo= confirm (`Your restaurant is ${randomPicker(restaurant)}\n Do you want to eat here?`)
let restaurantAnswer= randomPicker(restaurant)

while(restaurantTwo!=true){
    confirm(`Your new restaurant is ${randomPicker(restaurant)}`)
    if(restaurantTwo != true) { confirm(`New restaurant is ${randomPicker(restaurant)}`)
    }
    else{console.log(randomPicker(restaurant))
    }
}
       

    


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
