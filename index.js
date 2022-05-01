const express = require('express');
const app = express();
const Usuario =require('./functions/Usuario')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/src/index.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname+'/src/cadastro.html');
});

app.get('/agendamento', (req, res) => {
    res.sendFile(__dirname+'/src/agendamento.html');
});

app.post('/add-usuario',(req,res) => {
    Usuario.create({
      usuario_nome:req.body.nome,
      usuario_cpf:req.body.cpf,
      usuario_email:req.body.email,
      usuario_senha:req.body.senha
    }).then(function(){
      res.redirect('/')
    }).catch(function(erro){
      res.send("Usuario não cadastrado"+erro)
    })
})

app.post('/valida-usuario',(req,res) => {
  
  const emailUser = req.body.email
  const senhaUser = req.body.senha

  id = req.body.email

  const data = Usuario.findOne({ where: { usuario_email: id } });
  data.then((data) => {
    let email = data.dataValues.usuario_email
    let password = data.dataValues.usuario_senha

    console.log(email)
    console.log(password)
    console.log(emailUser)
    console.log(senhaUser)
  })

  res.send('Deu boa')
})

app.listen(8080)

