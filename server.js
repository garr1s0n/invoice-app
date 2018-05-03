const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 3128;
const bcrypt = require('bcrypt')
const saltRounds = 10;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Welcome to Invoicing App");
});

app.listen(PORT, function(){
    console.log(`App running on localhost:${PORT}`);
});

app.post('/register', function(res, req) {
    if( isEmpty(req.body.name)  || isEmpty(req.body.email) || isEmpty(req.body.company_name) || isEmpty(req.body.password) ){
        return res.json({
            'status' : false,
            'message' : 'All fields are required'
        });
    }
});