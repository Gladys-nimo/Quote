import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
     new Quote(1,'Gladys','Never say never','John Doe',new Date(2020,11,10),0,0),
     new Quote(2,'Grace', 'proscrastintination is the thief of time', 'Luther KIng',new Date(2020,9,11),0,0),
     new Quote(3,'John', 'everything is possible', 'Moses Bliss',new Date(2020,11,12),0,0),
  ];
  

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
