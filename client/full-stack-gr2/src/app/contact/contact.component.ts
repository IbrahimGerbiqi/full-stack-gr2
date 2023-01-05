import { Component} from '@angular/core';
//Route eshte per tju cas url
//Router merr info, a ka parametra shikon
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


// onInit i ekzektuton te gjitha komandat, e ben update monetin qe e heq gishtin nga tastiera, ne background updateohet vazhdimisht, por nuk e merr se nuk e prekem "submit" butonin
export class ContactComponent{


constructor(private router:Router){}

  firstName:string='';
  lastName:string='';
  age:number= 0;
  //isUpdate duhet te jete false sepse supozojme se ne fillim kur e hap ende asgje nuk ka shtuar, njehere duhet te shton pastaj te updateon
  isUpdate = false
  //userId eshte pozita, indexi
  userId = 0
koha:any

artist = "Nora Istrefi"

studentet = [
  {
    emri: "Erdet",
    mbiemri: "Shehu",
    mosha: 22
  },
  {
    emri: "Ergon",
    mbiemri: "Syla",
    mosha: 19
  }
]

// submit(){
  // console.log("Clicked!", this.firstName, this.lastName,this.age)
//   this.studentet.push({
//     emri:this.firstName,
//     mbiemri:this.lastName,
//     mosha:this.age
//   })
// }
//ose
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
  if(this.age >= 18){
    this.redirect()
  }
  //ose
  // if(this.age >= 18) this.redirect()

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


redirect(){
  this.router.navigateByUrl('/login')
  this.router.navigate(['login'])
}

getWeather(){
                                  //kjo eshte promise              
  this.weather.getWeather().pipe().subscribe((data)=>{
    console.log(data)
  })
}

}

