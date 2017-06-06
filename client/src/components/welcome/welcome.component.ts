import { Component } from '@angular/core';
import { ApiService } from 'service/api.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})

class WelcomeComponent {
  entered: boolean;
  constructor() {
  }

  public enterSite = () => {
    this.entered = true
  }
}

export {
  WelcomeComponent
}
