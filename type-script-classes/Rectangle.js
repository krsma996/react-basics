"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, width, lenght) {
        super(theX, theY);
        this._width = width;
        this._lenght = lenght;
    }
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        this._lenght = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + "radius=${this._radius}";
    }
}
exports.Rectangle = Rectangle;
