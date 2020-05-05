const express = require('express');
const bodyParser = require('body-parser');

var app = express();


var puerto = '8060';

app.listen(puerto, function() {
    console.log("Escuchando pedidos en el puerto " + puerto);
});

