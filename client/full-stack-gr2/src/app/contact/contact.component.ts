import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  firstName:any
  lastName:any
  age:any
  
  artist = "Muniba Hamza";

  studentet= [
    {
      emri:"Erdet",
      mbiemri:"Shehu",
      mosha:"22"
    },
    {
      emri:"Ergon",
      mbiemri:"Syla",
      mosha:"19"
    }

  ];
  submit(){
  

    this.studentet.push({
      emri:this.firstName,
      mbiemri:this.lastName,
      mosha:this.age
    })
   
  }
};
