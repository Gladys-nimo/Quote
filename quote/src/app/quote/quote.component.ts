import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

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

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.postedDate = new Date(quote.postedDate)
  this.quotes.push(quote)
}

deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete $(this.quotes[index].quote?`)
  

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
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
