// From given object we will create a variable that will result to the given sentence:

// Student with name John Doe is 25 years old from Kosovo/Prizren

let student = {
    name: "John",
    lastName: "Doe",
    age: "25",
    country: {
        name: "Kosovo",
        city: {
            name: "Prizren",
            postalCode: 20000,
        }
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
<<<<<<< HEAD
        }
    ]
};

let texti = `Student with name ${student.name} ${student.lastName} is ${student.age} years old from ${student.country.name}/${student.country.city.name}`

console.log(texti);
=======
        },
    ],
};
// Student with name John Doe is 25 years old from Kosovo/Prizren

let result = `Student with name ${student.name} ${student.lastName} is ${student.age} yearls old from ${student.country.name}/${student.country.city.name}`
console.log(result)
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
