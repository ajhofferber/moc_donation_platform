import { Component } from '@angular/core';
import { ApiService } from 'service/api.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

class WelcomeComponent {
  constructor() {
    console.log('i am welcome');
    console.log(ApiService)
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
