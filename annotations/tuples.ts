const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
//for tuples you need to respect the order of elements
//with an array as the following one, it accepts 3 types of values and you can swap them
//this can create a value loss 40, true, 40 . you lost the color value, you need to keep the structure
const pepsi1 =['brown',true,40]
//so we are going to define it as a tuple
const pepsi2: [string,boolean,number] =['brown',true,40]
//we dont want to repeat this again and again, so we define a type
type Drink = [string, boolean, number];
const pepsi3: Drink = ['blue',true, 30]
const sprite: Drink = ['clear',true,30]
//youre probably not going to use this too much, because with objects its easier to understand what each value means
//because that way its already organized as a list