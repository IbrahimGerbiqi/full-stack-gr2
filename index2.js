// perdorimi i disa metodave te express-it

const express = require('express');             // e inportojme pakon e expressit

const app = express();                          // i aktivizojme te gjitha pakot e expresit


app.use(express.json());                // kjo sherben per me parsu informatat qe vine si Json


app.get('/asd', (req, res) => {          // me kete metod na e kemi marr informaten ne browser (permes metodes res.send)
    res.send('Hello world')             // req (requrie) eshte kerkesa qe i behet, res (response) eshte pjesa qe e kthen kjo metod
});

app.get('/user/:id/:name/test', (req, res) => {             //  /user/:id/:name/test  eshte url, parametrat qe ne url jane id edhe name
    res.send(`Hello world  ${req.params.id} ${req.params.name}`)
});


app.post('/register', (req, res) => {                       // kto e thirrim me postman (ne kete rast localhost:5000/register) dhe rezultati paraqitet ne postman
    res.send('Post metod')
});

app.post('/register2', (req, res) => {                       // ktu e dergojme info prej postman, e aktivizojme app.use(express.json()); per me marr infot si json 
    console.log(req.body)
    res.send(`${req.body.name} ${req.body.lastName}`)
});

app.put('/a', (req, res) => {                               // edhe kete metod e thirrim ne postman
    res.send('Second Post method put')
})

app.delete('/b', (req, res) => {                            // edhe kete metod e thirrim ne postman
    res.send('Second Post method delete')
})


const port = 5000;

app.listen(port, () => {                                    // permes kesaj e rezervojme nje port per me na paraqit infot ne browser ose ne postman
    console.log('Porti per API eshte: ' + port)
});