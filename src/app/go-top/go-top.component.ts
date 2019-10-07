import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {
  isGoTopHidden = true;
  styleBottom = '16px';

  constructor() { }

  ngOnInit() {
  }

  gotoTop() {
    /*
     * reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
     * window.pageYOffset == window.scrollY; // always true
     */
    const scrollDuration = 500;
    const scrollStep = -window.pageYOffset / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
      const position = window.pageYOffset;
      if (position !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const position = window.pageYOffset;
    if (position > 500) {
      this.isGoTopHidden = false;
    } else if (!this.isGoTopHidden && position < 10) {
      this.isGoTopHidden = true;
    }

    const pageHeight = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset ||
      document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    // if (pageHeight <= (windowHeight + scrollPosition + 200)) {
    //   this.styleBottom = '32px';
    // } else {
    //   this.styleBottom = '32px';
    // }
  }

}
