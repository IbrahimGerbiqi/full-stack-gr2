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
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },  
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        }
    ],
};

let string = `${student.name} ${student.lastName} has finished `
let education = ''
for(let edu of student.education){
    education += `${edu.name} and `
}

education = education.slice(0,education.lastIndexOf('and'))

string += education

console.log(string)
