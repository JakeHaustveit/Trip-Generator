let array= [5, 10, 24, 30, 45, 69, 120]
let total=0




function averagePusher(array){
    arrayTwo= [1, 2, 3, 4,]
    for(let i=0; i< array.length; i++){
    total+= array[i]
    }
    let average= total/array.length;
    for(let i2=0; i2<array.length; i2++){
        if(array[i2]>average){
        arrayTwo.push(array[i2])
        }
    }
    

    
    console.log(average)
    console.log(arrayTwo)
    }

averagePusher(array)