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
    education: [{
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },
        {
            name: "University",
            startDate: "02/07/2019",
            endDate: "01/05/2021",
        },
    ],
};

// John Doe has finished High School and University
function Universitet(array) {
    let universitet = '';

    array.forEach(i => {
        universitet += i.name + ' and ';

    });

    let tekst = universitet.slice(0, universitet.lastIndexOf('and'));
    return tekst;
}

let fjalia = student.name + ' ' + student.lastName + '' + Universitet(student.education);

console.log(fjalia);