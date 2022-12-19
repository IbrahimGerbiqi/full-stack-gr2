// From given object we will create a variable that will result to the given sentence:

// John Doe has finished High School and University

let student = {
    name: "John",
    lastName: "Doe",
    age: "25",
    country: {
        name: "Kosovo",
        city: {
            name: "Prizren",
            postalCode: 20000,
        },
    },
    education: [
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },
        {
<<<<<<< HEAD
            name: "Master's Degree",
            startDate: "02/07/2021",
            endDate: "01/05/2022",
=======
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },  
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844
        }
    ],
};

<<<<<<< HEAD
let studEdu = ''
// for (let i in student.education) {
//     studEdu += `${student.education[i].name} and `
// }
student.education.forEach(edu => {
    studEdu += `${edu.name} and `
})
studEdu = studEdu.slice(0, studEdu.lastIndexOf(' and'))

console.log(`${student.name} ${student.lastName} has finished ${studEdu}.`)



=======
let string = `${student.name} ${student.lastName} has finished `
let education = ''
for(let edu of student.education){
    education += `${edu.name} and `
}

education = education.slice(0,education.lastIndexOf('and'))

string += education

console.log(string)
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844
