import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  title = 'Kontakt';
  description = `Kontakt`;

  contact = [
    {
      image: {
        fileName: 'contact_email',
        title: 'Email'
      },
      title: 'Email',
      subTitle: 'patryk.b@me.com'
    },
    {
      image: {
        fileName: 'contact_phone',
        title: 'Phone'
      },
      title: 'Telefon',
      subTitle: '+48 510 217 852'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
