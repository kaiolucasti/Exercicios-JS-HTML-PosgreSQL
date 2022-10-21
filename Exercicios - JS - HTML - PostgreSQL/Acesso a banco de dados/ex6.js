const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new pg.Client(
    {
        user:'postgres',
        host: 'localhost',
        database:'aula12',
        password: '256348',
        port: 5432

    }
);
client.connect();


app.post('/filmes', function(req, res){
    client.query(
        {
            text:'INSERT INTO filmes (diretor, titulo, idioma) VALUES($1,$2,$3)',
            values:[req.body.diretor, req.body.titulo,req.body.idioma]
        }
    )
    .then(
        function(ret){
            res.json(
                {
                    diretor: req.body.diretor,
                    titulo:req.body.titulo,
                    idioma: req.body.idioma
                } 
            )
        }
    );
});

app.listen(
    3000,
    function(){
        console.log('Servidor web funcionando');
    }
)
