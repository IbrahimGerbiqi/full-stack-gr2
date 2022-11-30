const students = [
    {
      firstName:'Endrit',
      lastName:'Tzk',
      birthday: '28-02-2000',
      course: 'Full-Stack-Development',
      examScore: 65
   },
   {
      firstName:'Teuta',
      lastName:'Bytyci',
      birthday: '13-09-1987',
      course: 'Full-Stack-Development',
      examScore: 90
   },
   {
      firstName:'Marigona',
      lastName:'Berisha',
      birthday: '10-05-1992',
      course: 'Full-Stack-Development',
      examScore: 32
   },
   {
    firstName:'Shani',
      lastName:'Gurizi',
      birthday: '29-07-2003',
      course: 'Full-Stack-Development',
      examScore: 32
   },
  ]

const listofstudents = (array, y,)=>{
    for(let i of array){
        if(i.firstName == y){
         return i;
    }   
}
return "nuk eshte"
}
let x='Shani'
  console.log(listofstudents(students,x))