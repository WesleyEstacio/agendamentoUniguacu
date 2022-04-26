const express = require('express');
const app = express();
const Usuario =require('./functions/Usuario')

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

app.post('/add-usuario',(req,res) => {
    Usuario.create({
      usuario_nome:req.body.nome,
      usuario_cpf:req.body.cpf,
      usuario_email:req.body.email,
      usuario_senha:req.body.senha
    }).then(function(){
      res.send("Aluno Cadastrado")
    }).catch(function(erro){
      res.send("Aluno não cadastrado"+erro)
    })
})

app.listen(8080)

