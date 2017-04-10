import { Component } from '@angular/core';

@Component({
  selector: 'welcome-splash',
  template: '<h2>HI I AM MMMUSEUM</h2>',
})

class WelcomeSplashComponent {
  constructor() {
    console.log('welcome splash duh')
  }
}

export {
  WelcomeSplashComponent
}
