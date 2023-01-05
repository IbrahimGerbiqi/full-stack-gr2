import { Component, OnInit } from '@angular/core';
import { MovieService } from 'services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService){}

  movies:any


  ngOnInit(): void {
    this.movieService.movies(1).pipe().subscribe((data)=>{
      this.movies = data
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }

}
