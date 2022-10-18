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
            name: "University",
            startDate: "02/07/2019",
            endDate: "01/05/2021",
        },
        {
            name: "Master's Degree",
            startDate: "02/07/2021",
            endDate: "01/05/2022",
        }
    ],
};

let studEdu = ''
// for (let i in student.education) {
//     studEdu += `${student.education[i].name} and `
// }
student.education.forEach(edu => {
    studEdu += `${edu.name} and `
})
studEdu = studEdu.slice(0, studEdu.lastIndexOf(' and'))

console.log(`${student.name} ${student.lastName} has finished ${studEdu}.`)



