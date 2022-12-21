import { Component } from '@angular/core';

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

      emri:'Endrit',
      mbiemri:'Tytynxhiu',
      mosha:17
    },
    {emri:'Bera',
      mbiemri:'Turtulla',
      mosha:17
    }
  ]
}
