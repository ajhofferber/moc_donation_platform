import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})

class AboutComponent {

  constructor() {
    console.log('i am about');

  }

  // public currentContent;
  //
  // public setContent = (content) => {
  //   console.log("hey")
  //   if (this.currentContent === content) return;
  //   console.log(this.currentContent)
  //   this.currentContent = content;
  //
  // }
}

export {
  AboutComponent
}
