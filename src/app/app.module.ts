import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { AccountComponent } from './Components/account/account.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    GoodsComponent,
    HomeComponent,
    CartComponent,
    AccountComponent,
    NotfoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({  
      apiKey: "AIzaSyAiPvYL5xjCaSL_Mwyy5dv9DHa7qGh_eis",
      authDomain: "market-1101.firebaseapp.com",
      databaseURL: "https://market-1101.firebaseio.com",
      projectId: "market-1101",
      storageBucket: "market-1101.appspot.com",
      messagingSenderId: "988826550495",
      appId: "1:988826550495:web:c037bd4e0e5a196eca296a",
      measurementId: "G-S6DKJ9DZ1Q"}) ,
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
