import { Component, OnInit, HostListener } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('mainFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms')
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ]),
    trigger('asideFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms 500ms')
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ]),
    trigger('introFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms')
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ]),
  ]
})
export class AppComponent implements OnInit {

  isIntroShown = true;
  isMobileWidth: boolean;

  ngOnInit() {
    this.resizeWindow(window.innerWidth);
    setTimeout(() => {
      this.isIntroShown = false;
    }, 1500);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerWidth);
  }

  private resizeWindow(innerWidth: any): void {
    if (innerWidth <= 1000) {
      this.isMobileWidth = true;
    } else {
      this.isMobileWidth = false;
    }
  }
}
