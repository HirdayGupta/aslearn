import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../models/lesson.model';

import { User } from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [Lesson]
})
export class DashboardComponent implements OnInit {

  private lessonsCollection: AngularFirestoreCollection<Lesson>;
  lessons: Observable<Lesson[]>;
  public user: User;

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth,
              private userService: UserService) {
    this.lessonsCollection = afs.collection<Lesson>('lessons');
    this.lessons = this.lessonsCollection.valueChanges();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  checkIsLessonComplete(lessonId: string) {
    return this.userService.isLessonCompleted(lessonId);
  }

  ngOnInit() {
    this.afAuth.authState.subscribe( (user) => {
      if (user) {
        this.user = this.userService.currentUser;
      }
    });
  }
}
