import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  isMobileWidth: boolean;
  title = 'Kontakt';

  contact = [
    {
      image: {
        fileName: 'contact_email',
        title: 'Email'
      },
      title: 'Email',
      subTitle: 'patryk.b@me.com',
      type: 'email',
    },
    {
      image: {
        fileName: 'contact_phone',
        title: 'Phone'
      },
      title: 'Telefon',
      subTitle: '+48 510 217 852',
      type: 'phone'
    },
  ];

  ngOnInit() {
    this.resizeFooter(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeFooter(event.target.innerWidth);
  }

  private resizeFooter(innerWidth: any): void {
    if (innerWidth <= 500) {
      this.isMobileWidth = true;
    } else {
      this.isMobileWidth = false;
    }
  }

}
