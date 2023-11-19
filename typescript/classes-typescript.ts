class Customer{
    
    private _name: string;
    private _lastName: string;
    
    constructor(theFrist:string,theLast:string){
        this._name = theFrist;
        this._lastName = theLast;
    }

    

  public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}


let newCustomer = new Customer("Nikola","Puskarevic");
newCustomer.lastName = "NewLastName";
console.log(newCustomer.name + newCustomer.lastName);