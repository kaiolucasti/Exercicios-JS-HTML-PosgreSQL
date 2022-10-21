const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get(
    '/',
    function(req, res){
        res.send("Meu servidor Web Funciona!!");
    }  
);
app.get(
    '/kaiolucas',
    function(req, res){
        let faherenheit = 140;
        let Celsius = (faherenheit - 32)*5/9
        let resultado = Celsius;
        res.send(resultado.toString());
    }
);
app.get(
    '/convfahr/:x',
    function(req, res){
        //req.params.num
       // req.params.x
        
     res.send(
     `Numero em Celsius ${(5/9)*(req.params.x - 32)}`);

    }
);

app.listen(
    3000,
    function (){
        console.log('Olá, seja Bem-Vindo');
    }

);