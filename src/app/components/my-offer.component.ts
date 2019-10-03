import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offer',
  templateUrl: './my-offer.component.html',
  styles: []
})
export class MyOfferComponent implements OnInit {

  title = 'Co oferuję';
  description = `Moja oferta`;

  myOffer = [
    {
      title: 'Zaprojektowanie produktu cyfrowego (UX/UI)',
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
          subTitle: 'poznać środowisko, konkurencje, trendy',
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
          subTitle: 'sprawdzić użyteczność, łatwość nanoszenia zmian, przygotować raport końcowy',
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
          subTitle: 'poznać problem, produkt, proces',
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
  ];



  constructor() { }

  ngOnInit() {
  }

}
