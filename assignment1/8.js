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
            name: "Course",
            startDate: "02/07/2019",
            endDate: "01/05/2021",
        }
    ],
};

// Metoda 1
let texti1 = `${student.name} ${student.lastName} has finished`
let texti2 = "";

for(let edu of student.education){ 
    texti2 += ` and ${edu.name}`;
}

let education = texti2.slice(texti2.indexOf("and")+3, texti2.length);

console.log(texti1 + education);

