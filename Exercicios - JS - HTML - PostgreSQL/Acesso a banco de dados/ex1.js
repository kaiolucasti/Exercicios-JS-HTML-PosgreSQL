const pg = require('pg');

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


client.query('SELECT * FROM filmes')
    .then(
        function(ret){
            for(linha of ret.rows){
                console.log("Título:", linha.titulo);
                console.log("Diretor:", linha.diretor);
                console.log("Data de Lançamento:", linha.data_lançamento);
                console.log("Idioma:", linha.idioma);
                console.log();
            }
        }
    );
