class Vehicle1 {
    
    constructor(public color:string){}
    //this public color is the same as declaring the color value outside the constructor
    honk():void{
        console.log('beep')
    }
}
//if we want to create another class like "car", its going to have the same methods found in Vehicle1
//so we can use extends to assign those methods, no need to use ctrlc and ctrlv to repeat code
class Car extends Vehicle1{
    constructor(public wheels:number, color:string){
        super(color);
    }

    private drive():void{       //we can also redefine methods, we simply redefine drive inside of Car
        console.log('vrooom')
    }
  //we dont see it but the parent constructor is being called here for us
    startDrivingProcess():void{
        this.drive()
        this.honk()
    }
}
//car is a child class because it extends vehicle1

//there's also modifiers to restrict access to methods:
//1 public (can be calleds anywhere any time) (default)
//2 private (can only be called by other methods in this class)
//3 protected (can be called by other methods in this class or by other in child classes)

const vehicle = new Vehicle1('orange');
vehicle.honk();
console.log(vehicle.color)

const car = new Car(4,'red');
car.startDrivingProcess();
car.honk();
//classes is how we get strong with code reuse on TS
