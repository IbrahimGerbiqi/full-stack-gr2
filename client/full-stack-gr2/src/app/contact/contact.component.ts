import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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
    },
  ];
  firstname: any;
  lastname: string='';
  age: number=0;

  pozita: any;

  pozita3: any;
  lastname3: any;
  age3: any;
  firstname4: any;

  test(){
    let studenti = {
      emri:this.firstname,
      mbiemri:this.lastname,
      mosha:this.age
    }
    this.studentet.push(studenti)
  }
  remove(){
      let x=parseInt(this.pozita)
      this.studentet.splice(x,1)
  }

  update(){
      let x=parseInt(this.pozita3)
        this.studentet[x].emri = this.firstname4
        this.studentet[x].mbiemri = this.lastname3
        this.studentet[x].mosha = this.age3
      
  }
}
