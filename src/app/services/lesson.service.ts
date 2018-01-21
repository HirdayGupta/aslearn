import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Lesson} from '../models/lesson.model';


@Injectable()
export class LessonService {

  constructor(private afs: AngularFirestore,
              public currentLesson: Lesson ) {
    this.currentLesson = new Lesson();
  }

  changeCurrentLessonTo(lessonId: string) {
    return this.afs.firestore.doc('lessons/' + lessonId).get()
      .then( (docSnapshot) => {
          if (docSnapshot.exists) {
            this.currentLesson.setTitle(docSnapshot.get('title'));
            this.currentLesson.setUID(docSnapshot.get('uid'));
            this.currentLesson.setLetters(docSnapshot.get('letters'));
          }
        }
      );
  }

}
