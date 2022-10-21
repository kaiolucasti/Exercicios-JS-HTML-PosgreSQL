const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.post(
    '/quadrado/',
    function(req, res){
      
        res.json(
            {
               
            area: req.body.lado*req.body.lado,
            perimetro: req.body.lado*4
               
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