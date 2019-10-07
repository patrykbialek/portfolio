import { Component, OnInit, HostListener, } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import * as content from './content-text';

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
        animate('800ms')
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ]),
    trigger('grow', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ width: '0' }),
        animate(500, style({ width: '*' }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ width: 0 }))
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {

  isMobileWidth: boolean;

  width = window.innerWidth - 50;
  widthMobile;
  marginLeft = 0;
  y = 100;
  oldY = 0;
  oldX = 0;
  grabber = false;
  grabMoveLeft;
  initialInnerWidth = window.innerWidth;
  paddingPL;
  paddingLeftPL;
  paddingRightPL;
  isEnLabel = true;

  isBackAnimation = false;
  isForwardAnimation = false;
  isShown: boolean;

  // Content
  aboutMe = content.aboutMe;
  contact = content.contact;
  formOfCooperation = content.formOfCooperation;
  myOffer = content.myOffer;

  backgroundPosition;
  isBackgroundShown = true;

  constructor() { }

  ngOnInit() {
    this.setBackgroundImage();

    this.resizeWindow(window.innerWidth);
    this.setGrabMoveLeft();

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    }
  }

  setBackgroundImage(): void {
    this.isBackgroundShown = window.innerWidth >= 1300
      ? true
      : false;

    const two = window.innerWidth - 290;
    const four = window.innerWidth - 482;
    const five = window.innerWidth - 386;
    this.backgroundPosition = { 'background-position-x': `-32px, ${two}px, -32px, ${four}px, ${five}px` };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerWidth);
    this.setBackgroundImage();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    this.resizerX(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldY = event.clientY;
    this.oldX = event.clientX;
  }

  resizerX(offsetX: number) {
    this.width += offsetX;

    if (this.width > this.initialInnerWidth - 49) {
      this.width = window.innerWidth - 50;
      return;
    }

    if (this.width < 39) {
      this.width = 40;
      return;
    }

    if (!this.isMobileWidth) {
      this.toggleIsEnLabel();
    }

    if (this.width >= this.initialInnerWidth - 50) {
      this.isForwardAnimation = true;
    } else {
      this.isForwardAnimation = false;
    }

    this.setGrabMoveLeft();
  }

  onChangeLanguageToEn() {
    this.width = 0;
  }

  onChangeLanguageToPl() {
    this.width = window.innerWidth;
  }

  onShowResizeOption(): void {
    this.isShown = true;
    this.isBackAnimation = true;

    if (this.isMobileWidth) {

      if (this.isEnLabel) {
        this.width = 0;
      } else {
        this.width = window.innerWidth;
      }
      this.isEnLabel = !this.isEnLabel;

    } else {
      this.paddingLeftPL = 24;
      this.paddingRightPL = 24;

      if (this.width === this.initialInnerWidth - 50) {
        this.width = this.initialInnerWidth - 100;
      }

      setTimeout(() => {
        this.width = this.initialInnerWidth - 50;
        this.toggleIsEnLabel();
      }, 150);

      setTimeout(() => {
        this.setGrabMoveLeft();
        this.isBackAnimation = false;
      }, 500);

    }
  }

  setGrabMoveLeft(): void {
    this.grabMoveLeft = this.width - 30;
  }

  toggleIsEnLabel(): void {
    if (this.width < this.initialInnerWidth - 500) {
      this.isEnLabel = false;
    } else {
      this.isEnLabel = true;
    }
  }

  private resizeWindow(innerWidth: any): void {

    this.width = window.innerWidth - 50;
    this.initialInnerWidth = window.innerWidth;

    if (innerWidth <= 1000) {
      this.isMobileWidth = true;

      if (!this.isEnLabel) {
        this.width = 0;
      } else {
        this.width = window.innerWidth;
      }
    } else {
      this.isMobileWidth = false;
      this.width = window.innerWidth - 50;

      this.onShowResizeOption();
    }

    this.setGrabMoveLeft();

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    } else {
      this.marginLeft = ((window.innerWidth - 960) / 2);
    }
  }

}
