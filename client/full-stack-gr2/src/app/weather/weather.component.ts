import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(
    private router:Router,
    private weather:WeatherService
    ){}

  koha:any;
    

  getWeather(){
    this.weather.getWeather().pipe().subscribe((data)=>{
      console.log(data)
      this.koha = data
      })}
}
