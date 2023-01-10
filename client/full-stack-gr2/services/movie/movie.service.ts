import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IUser } from 'interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


  movies(page:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=82e309254331f8d8f952fabdb0d32305&language=en-US&page=${page}`)
  }

  createUser(user:{firstName:string,lastName:string,age:number}){
  }

  createUser2(user:IUser){
    return this.http.post('asdasdas',{user})
  }

  
}
