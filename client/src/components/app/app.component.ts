import { Component } from '@angular/core';

@Component({
  selector: 'capitalism',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss', './app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log('hi im the app component', this);
  }

  wee = () => {
    console.log('weee');
  }
}
