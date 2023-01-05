import {Component} from "@angular/cli"



export class WeatherService{
    constructor(private http:MovieService) {}


//si te hapet fajlli cka te kete brenda te ekzekutohet
ngOnInit(): void{
    this.movieService.movies().pipe().subscribe((data)=>{
        this.movies
        console.log()
    })
}
}
