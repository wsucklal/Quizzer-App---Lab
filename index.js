const express = require('express');
const path = require('path');
const questions = require('./questions');

const app = express();

app.use(express.json());

app.get('/',(req,res) => {

    res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(2000, function(){
    console.log("listening on 2000");
});