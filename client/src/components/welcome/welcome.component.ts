import { Component } from '@angular/core';
import { ApiService } from 'service/api.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

class WelcomeComponent {
  entered: boolean;
  constructor() {
    console.log('i am welcome');
    console.log(ApiService)
  }

  public enterSite = () => {
    this.entered = true
  }
}

export {
  WelcomeComponent
}
