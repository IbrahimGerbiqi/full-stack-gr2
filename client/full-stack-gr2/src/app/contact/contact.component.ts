import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  artist = 'Isa Boletini'
  studentet = [
    {
      emri:'Ergon',
      mbiemri:'Syla',
      mosha:19
    },
    {
      emri:'Endrit',
      mbiemri:'Tytynxhiu',
      mosha:17
    }
  ]
}
