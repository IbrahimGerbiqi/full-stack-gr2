import { Component, OnInit } from '@angular/core';
import { MovieService } from 'service/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService){}

  movies:any
  movie:any
  page:any=1
  

  ngOnInit(): void {
    this.movieService.movies(this.page).pipe().subscribe((data)=>{
      this.movies = data
      console.log(this.movies)
    },(error)=>{
      console.log(error)
    })
  }

  nextPage(){
    console.log("test");
    
    this.page = this.page +1
    this.movieService.movies(this.page).pipe().subscribe((data)=>{
      this.movie = data
      for(let i in this.movie.results){
        this.movies.results.push(this.movie.results[i])
      }
      console.log(this.movies)
    },(error)=>{
      console.log(error)
    })
    // this.ngOnInit()
  }
  

}
