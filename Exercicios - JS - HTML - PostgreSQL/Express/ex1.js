const express = require('express');

const app = express();

app.get(
    '/',
    function(req, res){
        res.send("Meu servidor Web Funciona!");
    }
);
app.get(
    '/seunome',
    function(req, res){
        res.send("Meu servidor Funciona!");
    }
);

app.listen(
    3000,
    function (){
        console.log('Olá, seja Bem-Vindo');
    }

);