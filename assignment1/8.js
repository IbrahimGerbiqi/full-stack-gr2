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

// John Doe has finished High School and University
function Universitet(array) {
    let universitet = '';

    array.forEach(i => {
        universitet += i.name + ' and ';

    });

    let tekst = universitet.slice(0, universitet.lastIndexOf('and'));
    return tekst;
}

let fjalia = student.name + ' ' + student.lastName + ' ' + Universitet(student.education);

console.log(fjalia);
/*
class libri {
    constructor(emri, autori, zhandri) {
        this.emri = emri;
        this.autori = autori;
        this.zhandri = zhandri;
    }

    Tedhenat() {
        return `Libri ${emri} eshte shkruar nga ${autori}`;
    }

    get dhenat() {
        this.Tedhenat()
    }
}


libri1 = new libri('libri1', 'autori1', 'aksion');

libri1.Tedhenat();*/