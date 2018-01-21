import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../models/user.model';
import {Injectable} from "@angular/core";

@Injectable ()
export class UserService {

  constructor(public currentUser: User,
              private afs: AngularFirestore) {
    this.currentUser = new User();
  }

  updateFirebaseUser() {
    if (this.currentUser.getUID() == null) {
      return;
    }
    this.afs.firestore.doc('users/' + this.currentUser.getUID()).get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          this.afs.firestore.doc('users/' + this.currentUser.getUID())
            .set(this.getJsonObjectFromCurrentUser());
        }
      });
  }

  syncCurrentUserAndFirebaseUser() {
    if (this.currentUser.getUID() == null) {
      return;
    }
    console.log('here!');
    this.afs.firestore.doc('users/' + this.currentUser.getUID()).get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          this.afs.firestore.doc('users/' + this.currentUser.getUID())
            .set(this.getJsonObjectFromCurrentUser());
        } else {
          this.currentUser.setProgress(docSnapshot.get('progress'));
          console.log(docSnapshot.get('lessonsCompleted'));
          this.currentUser.setLessonsCompleted(docSnapshot.get('lessonsCompleted'));
        }
      });
    console.log(this.currentUser);
  }

  isLessonCompleted(lessonId: string) {
    for (let lesson of this.currentUser.getLessonsCompleted()) {
      console.log(lesson);
      // if (lessonId === lesson) {
      //   return true;
      // }
    }
    return false;
  }


    getJsonObjectFromCurrentUser() {
      return JSON.parse(JSON.stringify(this.currentUser));
    }


}
