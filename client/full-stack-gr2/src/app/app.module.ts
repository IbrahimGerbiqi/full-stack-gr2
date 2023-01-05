import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {WeatherService} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    SideBarComponent,
    NotFoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HTTPClientModule //na lejon te therret dicka ne internet, ndonje API
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import HTTPClient froimport { CommonModule } from '@angular/common';
//  angular/CommonModule.http


// costructor(
//   private http:HTTPClient{}
//   )

// getWeather(){                                                                                                       //body
//   return this.http.post("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",{})
//   return this.http.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//   //varesisht nga pi a e kemi get, post ose delete
// }