import { Component } from '@angular/core';
import { QuoteService } from './quote.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SkyBoundApp';
  constructor(private quote:QuoteService){
    
  };
}
