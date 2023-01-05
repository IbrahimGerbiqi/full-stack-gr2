import{Injectable} from "@angular/core"
import{HttpClient} from "@angular/common/http"

@Injectable({
    providedIn : "root"
})


//Cdo gje shkruhet brenda kllapave gjarperore te exportit
export class WeatherService{
    constructor(private http:HttpClient) {}

    movies(page:number){
        return this.http.get("")
    }
   
}