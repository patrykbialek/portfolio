import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
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

  // height = 2000;
  width = window.innerWidth - 40;
  marginLeft = 0;
  y = 100;
  oldY = 0;
  oldX = 0;
  grabber = false;

  initialInnerWidth = window.innerWidth;

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

  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    this.resizerX(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener('document:touchstart', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldY = event.clientY;
    this.oldX = event.clientX;
  }


  resizerX(offsetX: number) {
    this.width += offsetX;

    if (this.width > this.initialInnerWidth - 30) {
      this.width = window.innerWidth - 40;
      return;
    }

    if (this.width < 30) {
      this.width = 40;
      return;
    }

  }

  private resizeWindow(innerWidth: any): void {
    this.marginLeft = ((window.innerWidth - 960) / 2);
    this.width = window.innerWidth - 40;

    if (innerWidth <= 1000) {
      this.isMobileWidth = true;
    } else {
      this.isMobileWidth = false;
    }
  }

}
