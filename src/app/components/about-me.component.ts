import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: []
})
export class AboutMeComponent implements OnInit {

  @Input() aboutMe;

  constructor() { }

  ngOnInit() {
  }

}
