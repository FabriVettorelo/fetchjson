interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
    summary():string;
}

const oldCivic ={
    name:'civic',
    year:2000,
    broken:true,
    summary():string{
        return `Name: ${this.name} `
    }
}

const printVehicle1 = (vehicle: {name:string; year:number; broken:boolean}):void =>{
    console.log(`Name: ${vehicle.name} `)
    console.log(`Broken? ${vehicle.broken} `)
}
printVehicle1(oldCivic)
//annotation on printvehicle1 is too long, to improve it, we can use interface to fix this

const printVehicle = (vehicle: Vehicle):void =>{
    console.log(`Name: ${vehicle.name} `)
    console.log(`Broken? ${vehicle.broken} `)
}
printVehicle(oldCivic)
//ts took a look at the object oldCivic and it matches with the Vehicle interface

interface Reportable{
    summary():string
}
//now check this, new interface called reportable, can be used on different objects

const cola = {
    color:'brown',
    summary():string{
        return this.color
    }
}
//we can make different objects interact with the same function, the interface requires the summary function to be in it (allows any other content to be in the object)
const printSummary = (item:Reportable):void=>{
    console.log(item.summary())
}
//Reportable is a gatekeeper to printsummary
//oldcivic and cola must satisfy the reportable interface to work in printsummary
printSummary(oldCivic)
printSummary(cola)
