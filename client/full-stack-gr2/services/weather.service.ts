import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }


  getWeather(){
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=42.21&longitude=20.74&hourly=temperature_2m,relativehumidity_2m&start_date=2022-12-22&end_date=2022-12-23')
  }
}
