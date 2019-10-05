import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styles: []
})
export class MyOfferComponent implements OnInit {

  isMobileWidth: boolean;

  @Input() myOffer;

  ngOnInit() {
    this.resizeWindow(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerWidth);
  }

  private resizeWindow(innerWidth: any): void {
    if (innerWidth <= 500) {
      this.isMobileWidth = true;
    } else {
      this.isMobileWidth = false;
    }
  }

}
