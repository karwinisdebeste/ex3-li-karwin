// inladen van de dependencies - externe dependencies inladen via het commando: 
 // npm install express --save
  // npm install body-parser --save

var express = require('express'); // eenvoudige webserver in node js
var busteVerwerker = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen

// aanmaken van de webserver variabele
var app = express();
// automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
app.use(busteVerwerker.json());


var start = 0;

app.get("/calculation", function(request, response){
 
  response.send(String(start)); 
});

// eerste berekening optellen 
app.post("/calculation/optelling/:getal", function(request, response){

  var input = request.params.getal;
  console.dir(input);// gwn een check
  var solution = parseInt(start)+parseInt(input);//plus
  response.send(String(solution));
  start = solution;
  
  response.status(204).send();// RFC shit
});
// 2de berekening Vermenigvuldigen
app.post("/calculation/maal/:getal", function(request, response){

  var M_input = request.params.getal;
  console.dir(M_input);// gwn een check
  var M_solution = parseInt(start)*parseInt(M_input);//maal
  response.send(String(M_solution));
  start = M_solution;
  
  //response.status(204).send();// RFC shit
});
//3 de berekening --> delen
app.post("/calculation/deling/:getal", function(request, response){

  var D_input = request.params.getal;
  console.dir(D_input); // gwn een check
  var D_solution = parseInt(start)/parseInt(D_input);//maal
  response.send(String(D_solution));
  start = D_solution;
  
  //response.status(204).send();// RFC shit
});

//delete alles wat je gedaan hebt. gans de calculatie
app.delete('/calculation', function (request, response) {
    start = 0;
  response.send('DELETE request to homepage');
});


app.listen(4567);
// lijntje voor te zien dat alles is opgestart.
console.log("Server started");/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */