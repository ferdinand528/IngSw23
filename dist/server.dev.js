"use strict";

var express = require('express');

var app = express();

var sumar = require('./suma');

var port = 3001;
app.get('/', function (req, res) {
  var resultado = sumar(2, 5);
  res.send("El resultado de la suma es: ".concat(resultado));
  console.log('Esto funciona parece');
});
app.listen(port, function () {
  console.log('Servidor Express en funcionamiento en el puerto 3001');
});