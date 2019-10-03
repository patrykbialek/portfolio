import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styles: []
})
export class MyOfferComponent implements OnInit {

  title = 'Co oferuję';
  description = `Moja oferta`;

  constructor() { }

  ngOnInit() {
  }

}
