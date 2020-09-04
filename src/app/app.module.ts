import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var config = {
  apiKey: "AIzaSyDrLUL-SiiyAvn2pppCY_GZfiLgahSGtUY",
  authDomain: "pruebaapp-cdfc4.firebaseapp.com",
  databaseURL: "https://pruebaapp-cdfc4.firebaseio.com",
  projectId: "pruebaapp-cdfc4",
  storageBucket: "pruebaapp-cdfc4.appspot.com",
  messagingSenderId: "351570567450",
  appId: "1:351570567450:web:6c03fcc1c2a45a5a05cca3"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
