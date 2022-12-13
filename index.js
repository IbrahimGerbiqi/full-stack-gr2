const express = require('express')
const app = express()
app.use(express.json())

/* 1. API that will be used to register user to software must use validations for datas that will
be used to register user */


function registerUser(username, password, email) {
    // Validate the provided username
    if (!username || typeof username !== "string") {
      throw new Error("Please provide a valid username");
    }
  
    // Validate the provided password
    if (!password || typeof password !== "string") {
      throw new Error("Please provide a valid password");
    }
  
    // Validate the provided email address
    if (!email || typeof email !== "string" || !email.includes("@")) {
      throw new Error("Please provide a valid email address");
    }
  
    // Create a new user object with the provided data
    const user = {
      username: username,
      password: password,
      email: email
    };
  
    // Add the new user to the list of users
    users.push(user);
  
    // Return the new user object
    return user;
  }
  
  // 2. API that will be used to return all users within the software 

function getAllUsers() {
        return users;
  }


  // 3. API that will be used to update a user by id.

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
  
    // Update the user with the specified id in the database
    User.findByIdAndUpdate(id, updatedUser, (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json(user);
    });
  });


  //    4.API that will be used to delete a user by id.

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
  
    // Delete the user with the specified id from the database
    User.findByIdAndDelete(id, (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.json({ message: 'User deleted successfully' });
    });
  });

// 5.  API that will be used to return 10 users per page

app.get('/users', (req, res) => {
    const page = req.query.page || 1;
    const perPage = 10;
  
    User.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec((err, users) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.json(users);
      });
  });
  
 
// 6. API that will be used to login user to software and assign a JWT token.

app.post('/login', (req, res) => {
    const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user || !user.validatePassword(password)) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    return res.json({ token });
  });
});  
  
app.listen(3000)