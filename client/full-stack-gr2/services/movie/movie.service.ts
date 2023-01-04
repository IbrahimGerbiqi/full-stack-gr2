import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movies(){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=5d815bdc2d813420629d90447e476b59')
  }
}
