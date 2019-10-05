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

  isShown: boolean;
  isBackAnimation = false;
  isForwardAnimation = false;

  aboutMe = {
    en: {
      title: 'About me',
      description: `My name is Patryk Białek.
      I am IT specialist with 20 years professional experience. Through that time worked as IT Engineer, Application Support Specialist, System Analyst, Support Team Coordinator, UX/UI Designer, UX/Frontend Developer.

      Currently, my area of interest is <strong>Design</strong> and <strong>Development</strong> of digital products supporting clients' business processes.

      I invite you to cooperation.`
    },
    pl: {
      title: 'O mnie',
      description: `Nazywam się Patryk Białek.
      Jestem specjalistą IT z 20 letnim doświadczeniem. Pracowałem jako Inżynier IT, Specjalista Wsparcia Aplikacji, Analityk Systemowy, Koordynator Zespołu Wsparcia, Projektant UX/UI, Programista UX/Frontend.

      Obecnie obszar mojego zainteresowania to <strong>Projektowanie</strong> oraz <strong>Wytwarzanie</strong> produktów wspierających biznesowe procesy.

      Zapraszam do współpracy.`
    }
  };

  myOffer = {
    pl: {
      title: 'Co oferuję',
      offers: [
        {
          title: 'Projekt produktu cyfrowego (UX/UI)',
          subTitle: 'Proces:',
          image: {
            fileName: 'offer_design',
            title: 'Product design'
          },
          items: [
            {
              title: 'Zrozumieć',
              subTitle: 'poznać potrzeby i proces oraz przyszłych użytkowników',
            },
            {
              title: 'Zbadać',
              subTitle: 'poznać środowisko, konkurencję, trendy',
            },
            {
              title: 'Naszkicować',
              subTitle: 'przygotować makiety (mniej lub bardziej szczegółowe) a następnie je ocenić',
            },
            {
              title: 'Zaprojektować',
              subTitle: 'przygotować projekt UI, prototypy, zdefiniować wytyczne UX/UI',
            },
            {
              title: 'Wdrożyć',
              subTitle: 'zaimplementować rozwiązanie (zakodować)',
            },
            {
              title: 'Zweryfikować',
              subTitle: 'sprawdzić użyteczność, łatwość zmiany, przygotować raport końcowy',
            },
          ],
        },
        {
          title: 'Audyt / konsultacje UX/UI istniejącego produktu cyfrowego',
          subTitle: 'Proces:',
          image: {
            fileName: 'offer_audit',
            title: 'Product audit'
          },
          items: [
            {
              title: 'Zrozumieć',
              subTitle: 'poznać problem, produkt, jak wygląda proces',
            },
            {
              title: 'Zbadać',
              subTitle: 'poznać środowisko, trendy',
            },
            {
              title: 'Podsumować',
              subTitle: 'przygotować raport końcowy',
            },
          ],
        },
        {
          title: 'Wytworzenie produktu cyfrowego (kodowanie warstwy Frontend)',
          subTitle: 'Stos technologiczny:',
          image: {
            fileName: 'offer_development',
            title: 'Product development'
          },
          items: [
            {
              title: 'HTML',
              subTitle: '',
            },
            {
              title: 'JavaScript',
              subTitle: 'ES5+',
            },
            {
              title: 'CSS',
              subTitle: 'Sass, BEM, dedykowany design system',
            },
            {
              title: 'Angular',
              subTitle: 'TypeScript, RxJS, NgRx, Angular CLI, Jasmine, Karma',
            },
            {
              title: 'GIT',
              subTitle: 'TFS, Gitlab',
            },
            {
              title: 'Web API',
              subTitle: 'REST',
            },
            {
              title: 'Agile',
              subTitle: 'Scrum',
            },
          ],
        },
      ]
    },
    en: {
      title: 'My offer',
      offers: [
        {
          title: `Design of digital product (UX/UI)`,
          subTitle: 'Proccess:',
          image: {
            fileName: 'offer_design',
            title: 'Product design'
          },
          items: [
            {
              title: 'Understand',
              subTitle: 'get to know the needs, process and future users',
            },
            {
              title: 'Research',
              subTitle: 'get to know the environment, competition, trends',
            },
            {
              title: 'Sketch',
              subTitle: 'to prepare wireframes (low or high fidelity) and review them',
            },
            {
              title: 'Design',
              subTitle: 'to prepare UI design, prototypes, UX/UI standards/guidelines',
            },
            {
              title: 'Implement',
              subTitle: 'to implement the idea/product design',
            },
            {
              title: 'Evaluate',
              subTitle: 'to test usability, change management process, to prepare a summary',
            },
          ],
        },
        {
          title: 'UX/UI Audit / consultation UX/UI of existing digital product',
          subTitle: 'Process:',
          image: {
            fileName: 'offer_audit',
            title: 'Product audit'
          },
          items: [
            {
              title: 'Understand',
              subTitle: 'get to know the problem, product, process',
            },
            {
              title: 'Research',
              subTitle: 'get to know evironment, trends',
            },
            {
              title: 'Summary',
              subTitle: 'to prepare audit report',
            },
          ],
        },
        {
          title: 'Development of digital product (Frontend development)',
          subTitle: 'Technology stack:',
          image: {
            fileName: 'offer_development',
            title: 'Product development'
          },
          items: [
            {
              title: 'HTML',
              subTitle: '',
            },
            {
              title: 'JavaScript',
              subTitle: 'ES5+',
            },
            {
              title: 'CSS',
              subTitle: 'Sass, BEM, dedicated design system',
            },
            {
              title: 'Angular',
              subTitle: 'TypeScript, RxJS, NgRx, Angular CLI, Jasmine, Karma',
            },
            {
              title: 'GIT',
              subTitle: 'TFS, Gitlab',
            },
            {
              title: 'Web API',
              subTitle: 'REST',
            },
            {
              title: 'Agile',
              subTitle: 'Scrum',
            },
          ],
        },
      ]
    },
  };

  cooperationTerms = {
    en: {
      title: 'Form of cooperation',
      items: [
        {
          image: {
            fileName: 'cooperation_work',
            title: 'Work'
          },
          title: 'Type of work',
          subTitle: 'Remotely'
        },
        {
          image: {
            fileName: 'cooperation_meetings',
            title: 'Meetings'
          },
          title: 'Meetings',
          subTitle: 'Skype meetings or on-site in Warsaw'
        },
        {
          image: {
            fileName: 'cooperation_settlement',
            title: 'Settlement'
          },
          title: 'Form of settlement',
          subTitle: 'B2B - no VAT invoice'
        },
        {
          image: {
            fileName: 'cooperation_rate',
            title: 'Rate'
          },
          title: 'Rate',
          subTitle: 'From 120 PLN / h'
        },
        {
          image: {
            fileName: 'cooperation_availablility',
            title: 'Availablility'
          },
          title: 'Availablility',
          subTitle: '20 h / week'
        },
        {
          image: {
            fileName: 'cooperation_remarks',
            title: 'Remarks'
          },
          title: 'Remarks',
          subTitle: 'From December 2019, I start a full-time long-term cooperation'
        },
      ]
    },
    pl: {
      title: 'Forma współpracy',
      items: [
        {
          image: {
            fileName: 'cooperation_work',
            title: 'Work'
          },
          title: 'Tryb pracy',
          subTitle: 'Zdalnie'
        },
        {
          image: {
            fileName: 'cooperation_meetings',
            title: 'Meetings'
          },
          title: 'Spotkania',
          subTitle: 'Skype lub osobiście na terenie Warszawy'
        },
        {
          image: {
            fileName: 'cooperation_settlement',
            title: 'Settlement'
          },
          title: 'Forma rozliczenia',
          subTitle: 'B2B - faktura bez VAT'
        },
        {
          image: {
            fileName: 'cooperation_rate',
            title: 'Rate'
          },
          title: 'Stawka',
          subTitle: 'Od 120 PLN / h'
        },
        {
          image: {
            fileName: 'cooperation_availablility',
            title: 'Availablility'
          },
          title: 'Dostępność',
          subTitle: '20 h / tydzień'
        },
        {
          image: {
            fileName: 'cooperation_remarks',
            title: 'Remarks'
          },
          title: 'Uwagi',
          subTitle: 'Od grudnia 2019 rozpoczynam współpracę w pełnym wymiarze'
        },
      ]
    }
  };

  contact = {
    pl: {
      title: 'Kontakt',
      items: [{
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
      }]
    },
    en: {
      title: 'Contact',
      items: [
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
          title: 'Phone',
          subTitle: '+48 510 217 852',
          type: 'phone'
        }],
    }
  };

  constructor() { }

  ngOnInit() {
    this.resizeWindow(window.innerWidth);
    this.setGrabMoveLeft();

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.isMobileWidth) {
      this.resizeWindow(event.target.innerWidth);
    }
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

    if (this.width > this.initialInnerWidth - 49) {
      this.width = window.innerWidth - 50;
      return;
    }

    if (this.width < 39) {
      this.width = 40;
      return;
    }

    this.toggleIsEnLabel();

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
        this.isBackAnimation = false;
        this.setGrabMoveLeft();
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

    if (this.isMobileWidth) {
      this.marginLeft = 0;
    } else {
      this.marginLeft = ((window.innerWidth - 960) / 2);
    }
    this.width = window.innerWidth - 50;
    this.initialInnerWidth = window.innerWidth;

    if (innerWidth <= 1000) {
      this.isMobileWidth = true;
      this.width = window.innerWidth;
    } else {
      this.isMobileWidth = false;
      this.width = window.innerWidth - 50;
    }

    this.setGrabMoveLeft();

    if (this.isMobileWidth) {
      this.widthMobile = window.innerWidth;
      this.marginLeft = 0;
    } else {
      this.marginLeft = 240;
    }
  }

}
