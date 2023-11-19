import { Shape } from "./Shape";

export class Rectangle extends Shape {
   

    private _width: number;
    private _lenght: number;


    constructor(theX:number,theY:number,width:number,lenght:number){
        super(theX,theY);
        this._width = width;
        this._lenght = lenght;
    }
    
     get lenght(): number {
        return this._lenght;
    }
     set lenght(value: number) {
        this._lenght = value;
    }


     get width(): number {
        return this._width;
    }
     set width(value: number) {
        this._width = value;
    }

      getInfo(): string {
      return super.getInfo() + "radius=${this._radius}";
  }

   calculateArea(): number {
        throw new Error("Method not implemented.");
    }


}