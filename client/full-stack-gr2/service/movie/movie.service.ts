import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movies(page:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5d815bdc2d813420629d90447e476b59&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  }
}
