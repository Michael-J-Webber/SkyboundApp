import {Component} from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { Qodhelper } from 'src/models/QOD/qodhelper.class';
import { Success } from 'src/models/QOD/success.class';
import { Quote } from 'src/models/QOD/quote.class';
import { Contents } from 'src/models/QOD/contents.class';
import { Copyright } from 'src/models/QOD/copyright.class';
/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'quote-of-the-day',
  templateUrl: 'quote-of-the-day.html',
  styleUrls: ['quote-of-the-day.css'],
})
export class QuoteOfTheDay {
  success = new Success(0);
  quoteObject = new Quote("","0","",[],"","","","","","","");
  contents = new Contents([this.quoteObject]);
  copyright = new Copyright(0,"");
  qotdResults = new Qodhelper(this.success,this.contents,"",this.copyright);
  constructor(private quote:QuoteService){
    this.getQuote();
  };
  
  public getQuote(){
    this.quote.getQuote().subscribe((data : any) => {
      this.qotdResults = new Qodhelper(data.success,data.contents,data.baseurl,data.copyright);
      console.log(this.qotdResults);
    });
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */