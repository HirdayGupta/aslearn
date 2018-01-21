import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from "./services/user.service";
import {User} from "./models/user.model";
import { LessonP1Component } from './lesson-p1/lesson-p1.component';
import {RouterModule, Routes} from "@angular/router";
import { LessonP2Component } from './lesson-p2/lesson-p2.component';

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'lesson/:id', component: LessonP1Component},
  {path: 'lesson1/:id/:correctLetter', component: LessonP2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    LessonP1Component,
    LessonP2Component,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
