import { Component } from '@angular/core';
import { ArtifactSubmit } from './submit.models';

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})

class SubmitComponent {
  constructor() {
    console.log('i am submit');
  }

  artifact: ArtifactSubmit = {
    owner_name: '',
    owner_email: '',
    name: {
      primary: '',
      alternate: '',
    },
    location: '',
    description: '',
    size: {
      width: '',
      height: '',
      depth: '',
      estimate: '',
    },
    is_owned: null,
    is_in_posession: null,
    can_access_for_research: null,
    can_loan_temporarily: null,
    can_loan_permanent: null,
    materials: '',
    history: '',
    creation: {
      who: '',
      when: '',
      where: '',
    },
    acquisition: '',
    use: '',
    significance: '',
    owner_history: '',
  }
  hideCharacteristics: true;
  hideHistory: true;
  hideOptional: true;
  hideEmail: true;

  onSubmit = ({value, valid}: {value: ArtifactSubmit, valid: boolean}) => {
    console.log(value, valid)
  }
}

export {
  SubmitComponent
}
