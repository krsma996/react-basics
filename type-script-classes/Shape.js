"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_xNumberOfShape, _yNumberOfShape) {
        this._xNumberOfShape = _xNumberOfShape;
        this._yNumberOfShape = _yNumberOfShape;
    }
    get x() {
        return this._xNumberOfShape;
    }
    set x(value) {
        this._xNumberOfShape = value;
    }
    get yNumberOfShape() {
        return this._yNumberOfShape;
    }
    set yNumberOfShape(value) {
        this._yNumberOfShape = value;
    }
    getInfo() {
        return "x='${this_xNumberOfShape}'  y='${this._yNumberOfShape}'";
    }
}
exports.Shape = Shape;
