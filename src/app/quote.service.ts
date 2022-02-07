import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Categoryhelper } from 'src/models/CAT/categoryhelper.class';
import { Qodhelper } from 'src/models/QOD/qodhelper.class';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private url = 'https://quotes.rest/qod';
  constructor(private http:HttpClient) {}
  public getQuote(){
    //let url = 'https://quotes.rest/qod';
    return this.http.get(this.url);
  };

  public getQuoteByCategory(cat : string):Observable<Qodhelper>{
    return this.http.get(this.url + '.json?category=' + cat).pipe(map((response) => <Qodhelper>(response)));
  };
  public getCategories():Observable<Categoryhelper>{
    return this.http.get(this.url + '/categories.json').pipe(map((response) => <Categoryhelper>(response)));
  }
}
