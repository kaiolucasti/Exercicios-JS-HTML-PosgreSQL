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
    '/converte/:num',
    function(req,res){
        let fah = req.params.num;
        let cel = (5 / 9)*(fah - 32);
        let kel = ((fah - 32) * (5 / 9) + 273.15);
        res.json(
            {
                fahrenheit: fah,
                celsius: cel,
                kelvin: kel,
            }
        )
    }
)

app.listen(
    3000,
    function (){
        console.log('Olá, seja Bem-Vindo');
    }

);