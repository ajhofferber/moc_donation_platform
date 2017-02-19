import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

class WelcomeComponent {
  constructor() {
    console.log('i am welcome');
  }
}

export {
  WelcomeComponent
}