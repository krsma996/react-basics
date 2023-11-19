"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("../type-script-classes/Shape");
const Circle_1 = require("../type-script-classes/Circle");
const Rectangle_1 = require("../type-script-classes/Rectangle");
let myShame = new Shape_1.Shape(12, 13);
//console.log(myShame.getInfo());
let myCircle = new Circle_1.Circle(2, 3, 4);
//console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(4, 5, 6, 5);
//console.log(myRectangle.getInfo());
let arrayOfShapes = [];
arrayOfShapes.push(myShame);
arrayOfShapes.push(myCircle);
arrayOfShapes.push(myRectangle);
arrayOfShapes.forEach(shape => {
    console.log(shape.getInfo());
});
