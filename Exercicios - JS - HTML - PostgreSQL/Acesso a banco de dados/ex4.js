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

app.get('/filmes', function(req, res){
    client.query('SELECT * FROM filmes')
    .then(
        function(ret){
            let array = [];

            for(filmes of ret.rows){
                array.push(
                    {
                        nomeDoDiretor: filmes.diretor,
                        titulo: filmes.titulo,
                        idioma: filmes.idioma
                        
                    }
                );
            }
            res.json(
                {
                    status: 'OK',
                    numeroDeResultados: array.length,
                    resultatos: array
                }
            );
        }
        
    );


});

app.get('/filmes/:id', function(req, res){
    client.query(
        {
            text: 'SELECT * FROM filmes WHERE id = $1',
            values: [req.params.id]
        }

    )
    .then(
        function(ret){
            
            let filmes = ret.rows[0];
            res.json({
                status: 'OK',
                diretor: filmes.diretor,
                titulo: filmes.titulo,
                idioma: filmes.idioma

            });
        }
    );
});

app.listen(
    3000,
    function(){
        console.log('Servidor web funcionando');
    }
)
