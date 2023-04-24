var mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

var con = mysql.createConnection({
    host: process.env.maquina,
    user: process.env.usuario,
    password: process.env.senha,
    database: process.env.nome_banco
    
});

con.connect(function(err) {
    if(err) throw err;

    console.log('Conectando ao mysql');

});

module.exports = con;