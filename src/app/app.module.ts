import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import {UsersComponent} from './user.component';
import {routing} from './app.routing';
import{ReactiveFormsModule} from '@angular/forms';
import{UserFormComponent} from './user-form.component';
import { FormsModule }   from '@angular/forms';
import {LoginComponent} from './login.component';
import{LoginService} from './login.service';
import{AngularFireAuthModule} from 'angularfire2/auth';
import {SignupComponent} from './signup.component';
import {AuthGuard} from './auth.guard';

var config= {
  apiKey: "AIzaSyCNcGvVkNIl5mEJlwB5tomc62-_v2Cn8pE",
  authDomain: "my-awesome-project-738c0.firebaseapp.com",
  databaseURL: "https://my-awesome-project-738c0.firebaseio.com",
  projectId: "my-awesome-project-738c0",
  storageBucket: "my-awesome-project-738c0.appspot.com",
  messagingSenderId: "677510928610",
  appId: "1:677510928610:web:f9c8efad6514c901e426bb",
  measurementId: "G-2GBMKWCZ4B"
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule,
    routing,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [LoginService , AuthGuard] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
