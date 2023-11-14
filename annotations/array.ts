const carMakers = ['ford','toyota','chevy'];
//or const carMakers: string[] = ['ford','toyota','chevy'];
//if its an empty array, make shure to use annotation

const dates = [new Date(), new Date()];

const carsByMake = [['f150'],['corolla'],['camaro']]
//or const carsByMake: string[][] = []

//TS can help us by doing inference when extracting values from array
const car = carMakers[0]
const myCar = carMakers.pop();

//TS also prevents pushing incompatible values
//carMakers.push(100)

//Help with 'map' offers autocomplete
carMakers.map((car:string):string=>{
    return car.toUpperCase();
})

//array can still contain multiple types inside (flexible types)
const importantDates = [new Date(),'2030-10-10'];
// or you can do     const importantDates: (Date | string)[] = [new Date()];


