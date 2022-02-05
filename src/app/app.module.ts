import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import { QuoteOfTheDay } from './components/qotdcomponent/quote-of-the-day';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteService } from './quote.service';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteOfTheDay,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    FormsModule,    
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent, QuoteOfTheDay]
})
export class AppModule {}
