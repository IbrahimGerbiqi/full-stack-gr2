const { clear } = require('console');
var http = require('http'); 
var server = http.createServer(function (req, res) {   
   
});
server.listen(3000); 
let a = 1;
let b = 'Karakteristikat';
let c = true;
d = [1,2,3,4,5,6,'fjale']; 
e = {
    'emri':'Shani',
    'mosha':19,
    'gjatesia':1.69,
    'vendlindja':'Prizren',
    'gjinia':'Mashkull',
    'numri_tel':'043-867-244',
    'numriPersonal':117287636,
    'numripersonal':999999
}


console.log(b);
console.log('emri im eshte: ' +e.emri, );
console.log('jam ne moshen: '+ e.mosha);
console.log('jam i gjate: ' + e.gjatesia);
console.log('kam lindur ne: ' + e.vendlindja);
console.log('gjinia: ' +  e.gjinia );
console.log('mund te me kontaktoni ne numrin: ' + e.numri_tel);
console.log('numri im personal eshte: ' + e.numriPersonal);


students = [
   { 
    emri:'Shani',
    mosha:19,
    gjatesia:1.69,
    vendlindja:'Prizren',
    gjinia:'Mashkull',
    numri_tel:'043-867-244',
    numriPersonal:117287636,
},
{
    emri:'Nuridin',
    mosha:19,
    gjatesia:1.82,
    vendlindja:'Prizren',
    gjinia:'Mashkull',
    numri_tel:'043-867-244',
    numriPersonal:117287636,
},
{
    emri:'Ermal',
    mosha:19,
    gjatesia:1.78,
    vendlindja:'Prizren',
    gjinia:'Mashkull',
    numri_tel:'043-867-244',
    numriPersonal:117287636
},
]

let Students = students[2].emri;
console.log(Nuridin);





