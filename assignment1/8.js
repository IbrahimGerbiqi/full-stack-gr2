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
<<<<<<< HEAD
        
        {
            name: "Course",
            startDate: "02/07/2019",
            endDate: "01/05/2021",
=======
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },  
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
        }
    ],
};

<<<<<<< HEAD
// Metoda 1
let texti1 = `${student.name} ${student.lastName} has finished`
let texti2 = "";

for(let edu of student.education){ 
    texti2 += ` and ${edu.name}`;
}

let education = texti2.slice(texti2.indexOf("and")+3, texti2.length);

console.log(texti1 + education);

=======
let string = `${student.name} ${student.lastName} has finished `
let education = ''
for(let edu of student.education){
    education += `${edu.name} and `
}

education = education.slice(0,education.lastIndexOf('and'))

string += education

console.log(string)
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
