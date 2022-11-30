let students = [
    {
    firstname:'Shani',
    lastname:'Gurizi',
    birthday: '29.07.2003',
    course:'full-stack-development',
    examscore:'95',
    },
    {
        firstname:'Batuhan',
        lastname:'Zijabeg',
        birthday:'16.03.2006',
        course:'full-stack-development',
        examscore:'84',
    },
    {
        firstname:'Adem',
        lastname:'Marashi',
        birthday:'26.12.2004',
        course:'full-stack-development',
        examscore:'89',
    },
]
students.push(
    {
    firstname:'Vjollca',    
    lastname:'Ahmetaj',
    birthday: '21.09.1997',
    course:'full-stack-development',
    examscore:'63',
    },
    {
    firstname:'Fazli',
    lastname:'Kryeziu',
    birthday: '18.03.2002',
    course:'full-stack-development',
    examscore:'56',
    },
    {
    firstname:'Ismet',
    lastname:'Hasani',
    birthday: '01.11.1993',
    course:'full-stack-development',
    examscore:'43',
    }
)
// console.log(students);

function examscore(arr){
    let score = 0
    for(let student of arr){
        if(score < students.examscore)
        score = students.examscore
    }

    return score
}
console.log(examscore(students));

// studentsScoreMoreThan50 = [];
// students.forEach(student=>{
//     if(student.examScore>50){
//         studentsScoreMoreThan50.push(student);
//     }
// })

// fullSortedStudents = [...students];
// fullSortedStudents.sort((a, b) => {   
//     return a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName) 
//    })
// console.log(fullSortedStudents)































