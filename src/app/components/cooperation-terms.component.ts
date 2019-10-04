import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cooperation-terms',
  templateUrl: './cooperation-terms.component.html',
  styles: []
})
export class CooperationTermsComponent implements OnInit {

  isMobileWidth: boolean;
  title = 'Forma współpracy';

  cooperationTerms = [
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
      subTitle: 'Od grudnia 2019 rozpoczynam dłuższą współpracę w pełnym wymiarze'
    },
  ];

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
