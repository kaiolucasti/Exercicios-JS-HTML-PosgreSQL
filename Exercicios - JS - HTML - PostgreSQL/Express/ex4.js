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
    '/convfahr/:x',
    function(req, res){
      res.json(
          {
              fahrenheit: req.params.x,
              Celsius:(req.params.x - 32)*(5/9),
              Kelvin: (req.params.x-32)*5/9+273.15,
             }
        );
    }
);

app.listen(
    3000,
    function (){
        console.log('Olá, seja Bem-Vindo');
    }

);