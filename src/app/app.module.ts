import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddTipComponent } from './components/tips/add-tip/add-tip.component';
import { TipsComponent } from './components/tips/tips.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
// Services
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SpinnerComponent } from './components/spinner/spinner.component';


// FireBase config
export const firebaseConfig = {
    apiKey: "AIzaSyAHvI_4TeAPLEVp1VEme9feDKgh6U1kR80",
    authDomain: "footballapp-f9fad.firebaseapp.com",
    databaseURL: "https://footballapp-f9fad.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "25155396791"
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    TipsComponent,
    AddTipComponent,
    CarouselComponent,
    ProfileComponent,
    NewsComponent,
    AddNewsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
