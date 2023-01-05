import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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

}
