var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/calc');
var db = mongoose.connection;

app.get('/',function(req,res){
	res.send('please use /index/calc');
});


app.listen(3000);
console.log('running on port 3000...')