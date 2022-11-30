const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3336",
  user: "root",
  password: "",
  database: "school_2",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL database is connected successfully!");
});

module.exports = connection;
