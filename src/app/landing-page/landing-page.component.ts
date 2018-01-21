import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { User } from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private userService: UserService) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then( () => {
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.userService.currentUser.setName(user.displayName);
            this.userService.currentUser.setUID(user.uid);
            this.userService.syncCurrentUserAndFirebaseUser();
          }
        });
      });
  }

}
