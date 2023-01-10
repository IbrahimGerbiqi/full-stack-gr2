import { Component, OnInit } from '@angular/core';
import { IUser } from 'interfaces/user';
import { MovieService } from 'services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService){}

  movies:any

  user:IUser = {
    firstName:'test',
    lastName:'test 2',
    age:2
  }


  ngOnInit(): void {

    this.movieService.createUser(this.user)

    this.movieService.movies(1).pipe().subscribe((data)=>{
      this.movies = data
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }

}
