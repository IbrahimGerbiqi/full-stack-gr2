import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  firstName:string='';
  lastName:string='';
  age:number=0;
  isUpdate = false
  userId = 0

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




}

