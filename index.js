const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql2');

const app = express();
app.set('view engine', 'ejs');

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'alien',
    port    :3306
})
db.connect(err =>{
    if(err){(console.log(err))}
    console.log("Database connected succesfully !");
})

app.use(express.static((__dirname+"/public")))

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/home.html');
});


app.listen(4321,()=>{
    console.log("Server is running on the port 4321 ");
})