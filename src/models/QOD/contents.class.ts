import {Quote} from './quote.class'
export class Contents {   
    public quotes: Quote[];
    
    constructor(quotes : Quote[]){
      this.quotes = quotes;
    }
}