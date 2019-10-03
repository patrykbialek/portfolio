import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: []
})
export class AboutMeComponent implements OnInit {

  title = 'O mnie';
  description = `Nazywam się Patryk Białek.
  Jestem specjalistą IT z 20 letnim doświadczeniem. Pracowałem jako Inżynier IT, Specjalista Wsparcia Aplikacji, Analityk Systemowy, Koordynator Zespołu Wsparcia, Projektant UX/UI, Programista UX/Frontend.

  Obecnie obszar mojego zainteresowania to <strong>Projektowanie</strong> oraz <strong>Wytwarzanie</strong> produktów cyfrowych wspierających procesy biznesowe klientów.

  Zapraszam do współpracy.`;

  constructor() { }

  ngOnInit() {
  }

}
