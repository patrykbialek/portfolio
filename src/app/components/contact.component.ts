import { Component, HostListener, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  isMobileWidth: boolean;
  title = 'Kontakt';

  @Input() contact;

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
