import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
     new Quote(1,'Gladys','Never say never','John Doe'),
     new Quote(2,'Grace', 'proscrastintination is the thief of time', 'Luther KIng'),
     new Quote(3,'John', 'everything is possible', 'Moses Bliss'),
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
