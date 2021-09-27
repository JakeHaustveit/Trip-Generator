let restaurant= ["Chick-Fil-A", "Los Betos", "Mission BBQ", "#1 Chinese Food", "Hooter's"]
let destination= ["Grand Canyon", "North Fork, ID", "Key West, FL", "Billings, MT"]
let activities= ["Fly fishing", "Mountian biking", "Sky Diving", "Bar Hoping"]
let newWheels= ["Ford F-150", "Jeep Grand Charokee", "Volkswagon Bus", "Mazda Miata"]

function randomPicker(array){
    let arrayItemRandom= array[Math.floor(Math.random() * array.length)]
    return arrayItemRandom;
}




let food= randomPicker(restaurant)
let place= randomPicker(destination)
let fun= randomPicker(activities)
let whip= randomPicker(newWheels)



alert(`Your itinerary has you eating at  ${food}\nYou will be driving a ${whip}\nto ${place}\nWhere you will be ${fun}\n`)
let answer= prompt(` Type 1 to confirm trip\n Type 2 to change destination\n Type 3 to change desitnation and vehicle\n Type 4 to change destination, vehicle, and activity\n Type 5 to change entire trip`)
if(answer== "1"){ 
    console.log(`Your destination is ${place}\n Your vehicle is ${whip}\n Your activity is ${fun}\n Your restaurant is ${food}\n Have a safe trip!`)}


if(answer == "2") {let activityTwo= randomPicker(destination)
    let answerOne= confirm(`Your new destination is ${activityTwo}`)
    if(answerOne== true){ console.log(`Your new destination is ${activityTwo}\n Your vehicle is ${whip}\n Your activity is ${fun}\n Your restaurant is ${food}`)}
}
if(answer == "3"){ let activityThree=randomPicker(destination)
    let newWheelsTwo=randomPicker(newWheels)
    alert(`Your new destination is ${activityThree}\n Your new vehicle is ${newWheelsTwo}`) 
    let answerTwo= confirm(`Hit ok to confirm trip`)
    if(answerTwo == true) {console.log(`Your new destination is ${randomPicker(destination)}\n Your new vehicle is ${randomPicker(newWheels)}\n Your activity is ${fun}\n Your restaurant is ${food}`)}
}
if(answer == "4"){ 
    let activityFour= randomPicker(activities) 
    let newWheelsThree= randomPicker(newWheels)
    let destinationTwo= randomPicker(destination)
    alert(`Your new destination is ${destinationTwo}\n Your new vehicle is ${newWheelsThree}\n Your New activity is${activityFour}`)
    let answerThree= confirm(`Hit ok to confirm trip`)
    if(answerThree== true){console.log(`Your new destination is ${destinationTwo}\n Your new vehicle is ${newWheelsThree}\n Your new activity is ${activityFour}\n Your restaurant is ${food}`)}
}
if(answer == "5"){ let activityFive= randomPicker(activities) 
    let newWheelsFour= randomPicker(newWheels)
    let destinationThree= randomPicker(destination)
    let foodTwo= randomPicker(restaurant)
    alert(`Your new destination is ${destinationThree}\n Your new vehicle is ${newWheelsFour}\n Your new activity is ${activityFive}\n Your new restaurant is ${foodTwo}`)
    let answerFour= confirm(`Hit ok to confirm trip`)
    
    if(answerFour== true){console.log(`Your new destination is ${destinationThree}\n Your new vehicle is ${newWheelsFour}\n Your new activity is ${activityFive}\n Your new restaurant is ${foodTwo}`)
}


}

















