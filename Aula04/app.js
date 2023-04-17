const port = 3000;
const express = require('express');
const app = express();

app.set("view engine", 'ejs');

app.get('/', function(request, res){
    res.sendFile(__dirname + '/views/um.html');
})

app.get('/aa', function(request, res){
    res.render("ex.ejs", {'nome' : 'claudio', 'clientes' : ['maira', 'moises']});
})

app.get('/pessoa', function(request, res){
    res.send('Claudio');
})

app.listen(port);





/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>hell http-htm</h1>');
    res.write('</body>');
    res.end('</html>');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})*/