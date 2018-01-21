import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import {UserService} from './services/user.service';
import {LessonService} from './services/lesson.service';
import {Lesson} from "./models/lesson.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LessonService, Lesson]
})
export class AppComponent {
  title = 'app';
  constructor(public afAuth: AngularFireAuth) { }
}
