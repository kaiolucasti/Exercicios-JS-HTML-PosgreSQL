const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get(
    '/',
    function(req, res){
        res.send("Meu servidor Web Funciona!");
    }
);
app.get(
    '/kaiolucas',
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