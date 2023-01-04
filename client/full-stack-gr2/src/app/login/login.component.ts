import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router:Router,
    private user:UserService
  ){}

  email:string="";

  getUser(){
    this.user.getUser({email:this.email}).pipe().subscribe((data)=>{
      console.log(data)
    })
  }
}
