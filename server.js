const express = require('express');         // e thirre framworkin express

const app = express();                      // e aktivizon te gjitha pakot e ekspressit

app.use(express.json());

const users = [
    { id: 1, name: "Fisnik Vasija", place: "Prizren" },
    { id: 2, name: "Melisa Vasija", place: "Prizren" }

];


// shkruajme nje Get Request metod
// localhost:5000/users
app.get("/users", (req, res, next) => {            // kur te vjen Get kerkesa ne /users1, kthehet teksti ne res.send
    res.json({
        success: true,
        data: users
    });
});


app.post("/users", (req, res, next) => {        // permes metodes post dergohet nje informat ose donje te dhene nga frontend, na perdorim postman per ta simuluar kete
    const user = req.body;
    users.push(user);
    res.json({
        success: true,
        data: users
    });
});


app.put("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success: true,
        data: users
    });
});

app.delete("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
        }
    }
    res.json({
        success: true,
        data: users
    });
});



const PORT = 5000;

app.listen(PORT, () => {                        // e aktivizon portin me numer 5000 per kete skripte
    console.log('Server started PORT: ' + PORT);
});