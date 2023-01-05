<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'services/weather.service';
>>>>>>> 7f5cba81711bf4ad293ccf097e1753bc48561c7b

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{

  constructor(
    private router:Router,
    private weather:WeatherService
    ){}
    
  ngOnInit(): void {
    this.weather.getWeather().pipe().subscribe((data)=>{
      console.log(data)
      this.koha = data
    })
  }

  firstName:string='';
  lastName:string='';
  age:number=0;
  isUpdate = false
  userId = 0
  koha:any;

  constructor(private router: Router) {}

  artist = 'Nora Istrefi';
  studentet = [
    {
      emri:'Erdet',
      mbiemri:'Shehu',
      mosha:22
    },
    {
      emri:'Ergon',
      mbiemri:'Syla',
      mosha:19
    },
    {
      emri:'Bera',
      mbiemri:'Turtulla',
      mosha:17
    }
  ];

<<<<<<< HEAD
firstName: string=''
lastName: string=''
age: number=0;
isUpdate = false
userId = 0

// CREATE
submit(){
if(this.age <=18){this.redirect()}
if(!this.isUpdate){
  this.studentet.push({
    emri:this.firstName,
    mbiemri:this.lastName,
    mosha:this.age
  })
  }//else duhet te shtohet kodi per update
  // console.log('test')
}

redirect(){
  this.router.navigateByUrl('/login')
}
// READ

// UPDATE
// perditeso(){
//   const itemIndex = 1
//   const newItem = "Anetari 2 eshte perditesuar"

//   //this.studentet[itemIndex] = newItem
// }


// DELETE
fshij(){
  this.studentet.splice(0,1)
  // console.log('test')
}
=======
  redirect(){
    this.router.navigateByUrl('/login')
    // this.router.navigate(['login'])
  }

  getWeather(){
    
  }

  remove(index:number){
      this.studentet.splice(index,1)
      this.isUpdate = false
  }

  update(index:number){
    this.firstName = this.studentet[index].emri
    this.lastName = this.studentet[index].mbiemri
    this.age = this.studentet[index].mosha
    this.isUpdate = true
    this.userId = index
  }

  submit(){
  if(this.age <= 18){
    this.redirect()
  }
   if(!this.isUpdate){
    this.studentet.push({
      emri:this.firstName,
      mbiemri:this.lastName,
      mosha:this.age,
    })
   }else{
    this.studentet[this.userId].emri = this.firstName
    this.studentet[this.userId].mbiemri = this.lastName 
    this.studentet[this.userId].mosha = this.age
   }
    this.resetFiels()
  }

  resetFiels(){
    this.firstName = '';
    this.lastName = ''
    this.age = 0
    this.isUpdate = false;
    this.userId = -1
  }



>>>>>>> 7f5cba81711bf4ad293ccf097e1753bc48561c7b

}

