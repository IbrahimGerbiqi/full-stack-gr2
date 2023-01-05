import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { MovieService } from 'services/movie/movie.service';
=======
import { FormsModule } from '@angular/forms';
import { WeatherService } from 'services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'services/movie/movie.service';
import { MovieComponent } from './movie/movie.component';
>>>>>>> 7f5cba81711bf4ad293ccf097e1753bc48561c7b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    SideBarComponent,
    NotFoundComponent,
    ContactComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    HttpClientModule
>>>>>>> 7f5cba81711bf4ad293ccf097e1753bc48561c7b
  ],
  providers: [WeatherService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
