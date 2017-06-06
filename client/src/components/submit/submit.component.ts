import { Component } from '@angular/core';
import { Artifact } from './submit.models';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})

class SubmitComponent {
  constructor(private ApiService: ApiService, private router: Router) {
    console.log('i am submit');
  }

  artifact: Artifact = new Artifact();
  hideCharacteristics: true;
  hideHistory: true;
  hideOptional: true;
  hideEmail: true;

  onSubmit = () => {
    this.addArtifact(this.artifact)
    this.router.navigate(['./thanks'])
  }

  addArtifact = (artifact: Artifact) => {
    let res = this.ApiService.postArtifact(artifact)
  }
}



      // onClickContinue(questionsWithAnswers: SelectedQuestionWithAnswers[]){
      //     let submission = {
      //         'lessonID': null,
      //         'answerIDs': []
      //     }
      //     let unanswered = []
      //     for (let questionWithAnswers of questionsWithAnswers){
      //         if (questionWithAnswers.selected){
      //             submission.answerIDs.push(questionWithAnswers.selected.answer)
      //         }
      //         else{
      //             unanswered.push("You have not answered " + questionWithAnswers.question.name + "\n")
      //         }
      //     }
      //     if (unanswered.length == 0){
      //         submission.lessonID = questionsWithAnswers[0].selected.lesson
      //         this.dialogueService.postAnswer(submission)
      //     }
      //     else{
      //         alert(unanswered)
      //     }
      //
      // }
      //
      //



export {
  SubmitComponent
}
