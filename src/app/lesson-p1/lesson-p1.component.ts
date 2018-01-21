import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Lesson} from '../models/lesson.model';
import {LessonService} from '../services/lesson.service';


@Component({
  selector: 'app-lesson-p1',
  templateUrl: './lesson-p1.component.html',
  styleUrls: ['./lesson-p1.component.css'],
  providers: [Lesson]
})

export class LessonP1Component implements OnInit {

  currentLesson: Lesson;
  private choice1: string;
  private choice2: string;
  private choice3: string;
  private choice4: string;
  private img_src: string;
  private correctChoice: number;
  private usr_ans: string;
  private tryAgainDiv: boolean;

  constructor(private route: ActivatedRoute,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit() {
    let p = this.lessonService.changeCurrentLessonTo(this.route.snapshot.params['id']);
    this.tryAgainDiv = true;
    const downloadUrl = 'https://raw.githubusercontent.com/HirdayGupta/MNIST-ASL-DB/master/';
    p.then(() => {
      this.currentLesson = this.lessonService.currentLesson;
      this.choice1 = this.currentLesson.getLetters()[2];
      this.choice2 = this.currentLesson.getLetters()[1];
      this.choice3 = this.currentLesson.getLetters()[3];
      this.choice4 = this.currentLesson.getLetters()[0];


      this.correctChoice = Math.floor(Math.random() * 4);
      // while (this.currentLesson.getLetters()[correctChoice] === 'O') {
      //   correctChoice = Math.floor(Math.random() * 4);
      // }
      this.img_src = downloadUrl + this.currentLesson.getLetters()[this.correctChoice] + '.png';
      console.log(this.img_src);
    });
  }

  onSelectionChange(inp: number) {
    this.usr_ans =  this.currentLesson.getLetters()[inp];
    console.log(this.currentLesson.getLetters()[inp]);
  }

  checkAnswer() {
    if (this.usr_ans === this.currentLesson.getLetters()[this.correctChoice]) {
      this.tryAgainDiv = true;
      this.router.navigate(['lesson1', this.currentLesson.getUID(),
                          this.currentLesson.getLetters()[this.correctChoice]]
      );

    } else {
      this.tryAgainDiv = false;
    }
  }

}
