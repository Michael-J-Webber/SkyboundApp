import {Quote} from '../models/quote.class'
export class Contents {   
    public quotes: Quote[];
    
    constructor(quotes : Quote[]){
      this.quotes = quotes;
    }
}