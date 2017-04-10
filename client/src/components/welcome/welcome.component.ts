import { Component } from '@angular/core';
import { WelcomeSplashComponent } from './welcome-splash.component';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  directives: [WelcomeSplashComponent]
})

class WelcomeComponent {
  constructor() {
    console.log('i am welcome');
  }
}

export {
  WelcomeComponent
}
