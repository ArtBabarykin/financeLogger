import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter{
  
    constructor(
        readonly client: string, 
        readonly details: string,
        public amount: number
        ){}

    format(){
        return (`${this.client} owe $${this.amount} for ${this.details}`);
    }
}
