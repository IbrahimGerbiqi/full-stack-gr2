import { Component, OnInit } from '@angular/core';
import { MovieService } from 'service/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit{

  constructor(private movie:MovieService){}

  ngOnInit(): void {
      this.movie.movies().pipe().subscribe((data)=>{
        console.log(data);
        
      })
  }
}
