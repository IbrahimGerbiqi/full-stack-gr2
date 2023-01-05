import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstName = '';
  lastName= '';
  age:any;


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

  test(){
    this.studentet.push( {
      emri:this.firstName,
      mbiemri:this.lastName,
      mosha:this.age
      })
  }
}