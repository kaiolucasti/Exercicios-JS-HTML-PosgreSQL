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
            res.json(ret.rows)
        }
        
    );


});

app.listen(
    3000,
    function(){
        console.log('Servidor web funcionando');
    }
)