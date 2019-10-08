import { Component, OnInit, HostListener, } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

import * as content from './content-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('plFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms')
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ]),
    trigger('enFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms 1000ms')
      ]),
      transition(':leave',
        animate(600, style({ opacity: 0 })))
    ]),
    trigger('slide', [
      state('left', style({ width: '{{leftIndent}}', }), { params: { leftIndent: '0%' } }),
      state('right', style({ width: '{{rightIndent}}', }), { params: { rightIndent: '100%' } }),
      state('default', style({ width: '{{defaultWidth}}', }), { params: { defaultWidth: '0' } }),
      transition('* => *', animate('600ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    // trigger('slideGrabber', [
    //   state('left', style({ transform: 'translateX(-1300px)' })),
    //   state('right', style({ transform: 'translateX(0)' })),
    //   transition('* => *', animate('600ms cubic-bezier(0.35, 0, 0.25, 1)'))
    // ]),
  ]
})
export class AppComponent implements OnInit {
  activePane = 'right';
  isManualMove = false;

  leftIndent;
  rightIndent;
  defaultWidth = `${window.innerWidth - 50}px`;

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

  backgroundPositionEN;
  backgroundPositionPL;
  isBackgroundShownEN = true;
  isBackgroundShownPL = true;

  right = 50;
  backgroundPositionY = 2;
  top = 263;

  tak;

  constructor() { }

  ngOnInit() {
    this.setBackgroundImage();

    this.resizeWindow(window.innerWidth);
    this.setGrabMoveLeft();

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    }

    if (innerWidth <= 1000) {
      this.leftIndent = `0`;
      this.rightIndent = `100%`;
    } else {
      this.leftIndent = `${50}px`;
      this.rightIndent = `${window.innerWidth - 50}px`;
    }
  }

  setBackgroundImage(): void {
    this.isBackgroundShownEN = window.innerWidth >= 1300
      ? true
      : false;
    this.isBackgroundShownPL = this.isBackgroundShownEN;

    const two = window.innerWidth - 290;
    const four = window.innerWidth - 482;
    const five = window.innerWidth - 386;
    const six = 99.5;
    this.backgroundPositionEN = { 'background-position-x': `-32px, ${two}px, -32px, ${four}px, ${five}px` };
    this.backgroundPositionPL = { 'background-position-x': `-32px, ${two}px, -32px, ${four}px, ${five}px, ${six}%` };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow(event.target.innerWidth);
    this.setBackgroundImage();

    if (innerWidth <= 1000) {
      this.leftIndent = `0`;
      this.rightIndent = `100%`;
    } else {
      this.leftIndent = `${50}px`;
      this.rightIndent = `${window.innerWidth - 50}px`;
    }

    if (this.activePane === 'left') {
      this.right = -50;
      setTimeout(() => {
        this.right = window.innerWidth - 50;
      }, 500);
    }
    if (this.activePane === 'right') {
      this.right = window.innerWidth + 50;
      setTimeout(() => {
        this.right = 50;
      }, 500);
    }
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   console.log('mousemove');

  //   if (!this.grabber) {
  //     return;
  //   }
  //   this.resizerX(event.clientX - this.oldX);
  //   this.oldX = event.clientX;

  //   this.right = window.innerWidth - this.width;
  // }

  // @HostListener('document:mouseup', ['$event'])
  // onMouseUp(event: MouseEvent) {
  //   console.log('mouseup');

  //   this.grabber = false;
  // }

  // @HostListener('document:mousedown', ['$event'])
  // onMouseDown(event: MouseEvent) {
  //   console.log('mousedown');

  //   this.grabber = true;
  //   this.oldY = event.clientY;
  //   this.oldX = event.clientX;
  // }

  resizerX(offsetX: number) {
    this.width += offsetX;

    if (this.width > this.initialInnerWidth - 49) {
      this.width = window.innerWidth - 50;
      return;
    }

    if (this.width < 39) {
      this.width = 50;
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

    this.activePane = '';
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

    this.isManualMove = false;

    this.activePane = this.activePane === 'left' ? 'right' : 'left';

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

      this.isEnLabel = !this.isEnLabel;

      if (this.activePane === 'left') {
        this.right = -50;
        setTimeout(() => {
          this.right = window.innerWidth - 50;
        }, 500);
      }
      if (this.activePane === 'right') {
        this.right = window.innerWidth + 50;
        setTimeout(() => {
          this.right = 50;
        }, 500);
      }

      // this.activePane = '';

      // if (this.width < this.initialInnerWidth - 50) {
      //   this.activePane = 'left';
      // } else {
      // }

      // if (this.width === this.initialInnerWidth - 50) {
      //   this.activePane = 'left';
      // }


      // console.log('pl', this.width, this.initialInnerWidth)
      // if ((this.width === 50 && this.isEnLabel) || this.width < this.initialInnerWidth - 50 && this.isEnLabel) {
      //   console.log('pl', this.width, this.initialInnerWidth)
      //   this.width = this.initialInnerWidth - 50;
      //   // this.isBackAnimation = false;
      // }

      // if (this.width === this.initialInnerWidth - 50 && !this.isEnLabel) {
      //   console.log('en', this.width, this.initialInnerWidth)
      //   this.width = 50;
      // }

      // setTimeout(() => {
      //   this.width = this.initialInnerWidth - 50;
      //   this.toggleIsEnLabel();
      // }, 150);

      // setTimeout(() => {
      //   this.setGrabMoveLeft();
      //   this.isBackAnimation = false;
      // }, 500);

    }
  }

  setGrabMoveLeft(): void {
    // this.grabMoveLeft = this.width - 30;
  }

  toggleIsEnLabel(): void {
    // if (this.width < this.initialInnerWidth - 500) {
    //   this.isEnLabel = false;
    // } else {
    //   this.isEnLabel = true;
    // }
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
    }

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    } else {
      this.widthMobile = window.innerWidth;
      this.marginLeft = ((window.innerWidth - 960) / 2);
    }
  }


  tt() {
    // this.activePane = 'default';
    // this.defaultWidth = `${this.width}px`;
  }
}
