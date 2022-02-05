import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http:HttpClient) {}

  public getQuote(){
    //let url = 'https://quotes.rest/qod';
    return this.http.get('https://quotes.rest/qod');
  };

  public getCategories(){
    return this.http.get('https://quotes.rest/qod/categories.json');
  }
}
