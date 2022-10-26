// let arr1 = [123,12,423,432,5,346,34,42]
// let arr2 = [123,12,32,5,32456,436,45,7,42,3]
// let arr3 = [7,68,435,34,564,7,546,45]


// const functionTest  = (num1,num2) =>{
//   return num1 + num2
// }

// console.log(functionTest)
// console.log(findLargest(functionTest));

// function findLargest (array){
//   let largest = array[0]
//   for(let num of array){
//       if(num > largest){
//         largest = num
//       }
//   }
//   return largest
// }

// // fullSortedStudents.sort((a, b) => {   
// //   return a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName) 
// //  })

// const arr1Result = findLargest(arr1)
// const arr2Result = findLargest(arr2)
// const arr3Result = findLargest(arr3)

// console.log(arr1Result);
// console.log(arr2Result);
// console.log(arr3Result);


const std = [
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
]

                    // std   //'Ibrahim'
const findStudent = (emri,lista) =>{
  for(let studenti of lista){
    if(emri == studenti.firstName){
      return studenti
    }
  }
  return 'nuk esht'
}


console.log(findStudent(std,'Marigona'))




