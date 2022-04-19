const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/src/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/src/login.html');
});

app.get('/servicos', (req, res) => {
    res.sendFile(__dirname+'/src/servico.html');
});

app.get('/horario', (req, res) => {
    res.sendFile(__dirname+'/src/horario.html');
});

app.listen(8080)