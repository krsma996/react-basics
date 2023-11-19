import { Shape } from "../type-script-classes/Shape"
import { Circle } from "../type-script-classes/Circle"
import { Rectangle } from "../type-script-classes/Rectangle";





//console.log(myShame.getInfo());

let myCircle = new Circle(2,3,4);
//console.log(myCircle.getInfo());

let myRectangle = new Rectangle(4,5,6,5);
//console.log(myRectangle.getInfo());

let arrayOfShapes:Shape[] = [];
arrayOfShapes.push(myCircle);
arrayOfShapes.push(myRectangle);

arrayOfShapes.forEach(shape =>{
    console.log(shape.getInfo());
});