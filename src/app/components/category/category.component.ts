import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/quote.service';
import { Qodhelper } from 'src/models/QOD/qodhelper.class';
import { Success } from 'src/models/QOD/success.class';
import { Quote } from 'src/models/QOD/quote.class';
import { Contents } from 'src/models/QOD/contents.class';
import { Copyright } from 'src/models/QOD/copyright.class';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  success = new Success(0);
  quoteObject = new Quote("","0","",[],"","","","","","","");
  contents = new Contents([this.quoteObject]);
  copyright = new Copyright(0,"");
  quoteResult = new Qodhelper(this.success,this.contents,"",this.copyright);
  constructor(private quote:QuoteService){
    this.getQuoteByCategory(this.cat);
  };
  public getQuoteByCategory(cat :string){
    this.quote.getQuoteByCategory(cat).subscribe((data : any) => {
      this.quoteResult = new Qodhelper(data.success,data.contents,data.baseurl,data.copyright);
      console.log(this.quoteResult);
    });
  }
  cat = "art"; //change this to the dynamic category
  ngOnInit(): void {
    
  }

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */