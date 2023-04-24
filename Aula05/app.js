const port = 3000;
const con = require('./conexao');

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');



app.get('/exibir', (request,res) => {
    
    let sql = 'select * from aluno '

    con.query(sql, (err, result, fields) => {
    if (err) throw err;
    console.log('Sql executado');
    console.log(result);

    res.render('dados', {'result' : result});
    });
});
app.listen(port);

    //Para criar uma tabela aluno
    // let sql = create table aluno (id int primary key, nome VARCHAR(200), idade int )
    //let sql = 'insert into aluno (id, nome, idade) VALUES (id,"Nome",idade)';


    // Para criar varios dados de uma vez

    //let sql = 'insert into aluno (id, nome, idade) VALUES ?';

    // const dados = [
    //         [2, 'Ana',23],
    //         [3, 'Jarbas',54],
    //         [4, 'Antonio',70],
    // ]

    
