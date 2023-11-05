//primitive types
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let empty:undefined= undefined;

//built in objects
let now: Date =new Date();

//I can delete all previous annotations and everything will be fine due to inference
let apples1 = 5;
let speed1= 'fast';
let hasName1= true;
let nothing1= null;
let empty1= undefined;
//this is okay, only declare if nessesary

//array
let colors: string[] = ['red', 'green', 'blue'];
let legions: number[] = [501,212,187];
let truths: boolean[] = [true,false];

//classes
class Car{

}
let car: Car = new Car();

//object literal
let point: {x:number; y:number} = {
    x:10,
    y:20
};

//function
const logNumber: (i: number) => void =(i:number)=>{
  console.log(i)
}

//WHEN TO USE ANNOTATIONS
//1 function that returns "any" type
const json = '{"X":10,"Y":20}';
const coordinates = JSON.parse(json) //TS cannot predict JSON.parse
console.log(coordinates) //this returns an any type, means TS has no idea what it is
//if you write coordinates.adfasdf it doesnt exist but TS cant detect the error
//you should avoid variables with "any" at all costs, you can correct this by doing:
const coordinates1:{x:number;y:number}=JSON.parse(json); 
console.log(coordinates1)//this is okay!

//2 when we declare a variable on one line and initialize it later
let words = ['red','green','blue']
let foundWord;
//you can fix this by doing let foundWord:boolean or let foundWord=false
for (let i= 0; i < words.length; i++) {
    if (words[i]==='green'){ foundWord=true }  
}

//3 when a variable type cannot be inferred correctly
let numbers = [-10,-1, 12];
//let numberAboveZero; //we dont want any number here at the start so we can fix using |
let numberAboveZero:boolean|number = false;

for (let i= 0; i < numbers.length; i++) {
    if (numbers[i]>0){ numberAboveZero=numbers[i] }  
}
