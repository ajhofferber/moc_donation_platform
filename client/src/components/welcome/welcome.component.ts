nlimport { Component } from '@angular/core';
import { WelcomeSplashComponent } from './welcome-splash.component';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

class WelcomeComponent {
  constructor() {
    console.log('i am welcome');
  }

  public currentContent;

  public setContent = (content) => {
    console.log("hey")
    if (this.currentContent === content) return;
    console.log(this.currentContent)
    this.currentContent = content;

  }
}

export {
  WelcomeComponent
}
