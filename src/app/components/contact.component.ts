import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  title = 'Kontakt';
  description = `Kontakt`;
  constructor() { }

  ngOnInit() {
  }

}
