import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Lesson} from '../models/lesson.model';
import {LessonService} from '../services/lesson.service';

@Component({
  selector: 'app-lesson-p2',
  templateUrl: './lesson-p2.component.html',
  styleUrls: ['./lesson-p2.component.css'],
  providers: [Lesson]
})
export class LessonP2Component implements OnInit {
  currentLesson: Lesson;
  correctAnswer: string;

  constructor(private route: ActivatedRoute,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit() {
    const p = this.lessonService.changeCurrentLessonTo(this.route.snapshot.params['id']);
    p.then(() => {
      this.currentLesson = this.lessonService.currentLesson;
      this.correctAnswer = this.route.snapshot.params['correctLetter'];
    });
  }

}
