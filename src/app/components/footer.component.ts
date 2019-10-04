import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  footerWith2Lines: boolean;
  updateDate = '05/10/2019';
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    this.resizeWindow(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerWidth);
  }

  private resizeWindow(innerWidth: any): void {
    if (innerWidth < 1024) {
      this.footerWith2Lines = true;
    } else {
      this.footerWith2Lines = false;
    }
  }

}
