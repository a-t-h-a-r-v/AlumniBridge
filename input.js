var http = require('http');
var sql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

var con = sql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "varghese"
});

app.get('/send', function(req, res) {
    var rr = "<html>";
    rr += "<body>";
    rr += "<form method='POST' action='thank'>";
    rr += "Customername: <input type='text' name='one' value=''>";
    rr += "City: <input type='text' name='two' value=''>";
    rr += "Salesperson: <input type='text' name='three' value=''>";
    rr += "<input type='submit' name='t1' value='send'>";
    rr += "</form>";
    rr += "</body>";
    rr += "</html>";
    res.send(rr); // Send the response back to the client
});

app.post('/thank', urlencodedParser, function(req, res) {
    // Handle form submission here
    var customerName = req.body.one;
    var city = req.body.two;
    var salesperson = req.body.three;

    // You can insert the data into the database here
    // For example:
    var sqlInsert = "INSERT INTO details (custname, city, salesperson) VALUES (?, ?, ?)";
    con.query(sqlInsert, [customerName, city, salesperson], function(err, result) {
        if (err) throw err;
        res.send('Data inserted successfully!');
    });
});

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000/send');
});