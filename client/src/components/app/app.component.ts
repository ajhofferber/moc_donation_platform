import { Component } from '@angular/core';

@Component({
  selector: 'capitalism',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log('hi im the app component', this);
  }

  wee = () => {
    console.log('weee');
  }
}
