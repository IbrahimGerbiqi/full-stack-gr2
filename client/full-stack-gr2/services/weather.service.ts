import{Injectable} from "@angular/core"
import{HttpClient} from "@angular/common/http"

@Injectable({
    providedIn : "root"
})


//Cdo gje shkruhet brenda kllapave gjarperore te exportit
export class WeatherService{
    constructor(private http:HttpClient) {}

    movies(){
        return this.http.get("")
    }
    // getWeather(){
    //     return this.http.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    // }
}