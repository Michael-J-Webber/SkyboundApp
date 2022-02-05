import {Component} from '@angular/core';
import { QuoteService } from './quote.service'
import { Qodhelper } from 'src/models/qodhelper.class';
import { Success } from 'src/models/success.class';
import { Quote } from 'src/models/quote.class';
import { Contents } from 'src/models/contents.class';
import { Copyright } from 'src/models/copyright.class';
/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {
  success = new Success(0);
  quoteObject = new Quote("","0","",[],"","","","","","","");
  contents = new Contents([this.quoteObject]);
  copyright = new Copyright(0,"");
  results = new Qodhelper(this.success,this.contents,"",this.copyright);
  constructor(private quote:QuoteService){
    this.getQuote();
  };
  
  public getQuote(){
    this.quote.getQuote().subscribe((data : any) => {
      this.results = new Qodhelper(data.success,data.contents,data.baseurl,data.copyright);
      console.log(this.results);
    });
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */