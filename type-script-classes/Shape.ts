export abstract class Shape{

 private _xNumberOfShape:number;
 private _yNumberOfShape: number;

    constructor(_xNumberOfShape: number,_yNumberOfShape: number){
        this._xNumberOfShape =_xNumberOfShape;
        this._yNumberOfShape = _yNumberOfShape;
    }
    
   get x ():number{
    return this._xNumberOfShape
   }
   set x(value:number){
    this._xNumberOfShape = value;
   }

    get yNumberOfShape(): number {
        return this._yNumberOfShape;
    }
    set yNumberOfShape(value: number) {
      this._yNumberOfShape = value;
   }

   getInfo():string{
    return "x='${this_xNumberOfShape}'  y='${this._yNumberOfShape}'";
   }


   abstract calculateArea():number;

}