import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service'
import { Categoryhelper } from 'src/models/CAT/categoryhelper.class';
import { Success } from 'src/models/CAT/success.class';
import { Category, Description } from 'src/models/CAT/category.class';
import { Contents } from 'src/models/CAT/contents.class';
import { Copyright } from 'src/models/CAT/copyright.class';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  title = 'SkyBoundApp';
  selectedCat?: string;
  categories : Category[]=[];
  success = new Success(0);
  category = new Category([]);
  description = new Description([]);
  contents = new Contents([], []);
  copyright = new Copyright(0,"");
  catResults = new Categoryhelper(this.success,this.contents,"",this.copyright);
  constructor(private quote:QuoteService){}
  getCategories(){
    this.quote.getCategories().subscribe((data : Categoryhelper) => {
      this.catResults = data;
    });
  }
  
  ngOnInit(){
    this.getCategories();
  }
  
}
