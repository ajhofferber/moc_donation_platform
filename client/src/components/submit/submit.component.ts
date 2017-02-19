import { Component } from '@angular/core';

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

class SubmitComponent {
  constructor() {
    console.log('i am submit');
  }
}

export {
  SubmitComponent
}