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
        }
    },
    education: [
        {
            name: "High School",
            startDate: "02/07/2015",
            endDate: "01/05/2018",
        },
        {
            name: "Cisco",
            startDate: "12/09/2022",
            endDate: "01/12/2022",
        },
        {
            name: "University",
            startDate: "02/07/2019",
            endDate: "01/05/2021",
        }
    ]
};

//console.log(student.name+ ' '+student.lastName+ ' has finished ' +student.education[0].name+ ' and ' +student.education[1].name);

teksti1 = student.name+ ' '+student.lastName+ ' has finished ' ;
teksti2 = '';

for(let i=0; i<student.education.length; i++){
    if(i+1 == student.education.length){
        teksti2 +=  student.education[i].name
    }
    else{
    teksti2 +=  student.education[i].name + ' and ';
    }
}
console.log(teksti1 + teksti2)