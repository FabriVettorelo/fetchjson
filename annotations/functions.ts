const add = (a: number, b: number):number =>{
    return a + b;
};
//always add annotations for functions arguments

const substract =(a:number,b:number) => {
    a-b
}; //this one for example returns nothing, output annotation is also important

function divide(a:number,b:number):number{
    return a/b
};

const multiply = function(a:number, b:number):number{
    return a*b
};

const logger = (message:string):void=>{
    console.log(message);  
}//this can also return undefined or null, both are void

const throwError = (message:string):string =>{
    if(!message){
        throw new Error(message)
    }
    return message
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast:{date: Date, weather:string}): void=>{
    console.log(forecast.date);
    console.log(forecast.weather);   
};

//destructuring on annotations
const logWeather2 = ({date,weather}:{date: Date, weather:string}): void=>{
    console.log(date);
    console.log(weather);   
};