const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'lechuapp'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected")

})

module.exports = connection;

