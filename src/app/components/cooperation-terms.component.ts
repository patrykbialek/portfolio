import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-cooperation-terms',
  templateUrl: './cooperation-terms.component.html',
  styles: []
})
export class CooperationTermsComponent implements OnInit {

  isMobileWidth: boolean;

  @Input() cooperationTerms;

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
