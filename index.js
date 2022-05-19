const express = require('express');
const app = express();
const Usuario =require('./services/Usuario')
const Horario =require('./services/Horario')

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
    }).then(() => {
      res.redirect('/')
    }).catch((erro) => {
      res.redirect('/cadastro')
    })
})

app.post('/valida-usuario',(req,res) => {

  const id = req.body.email

  if(id == '') {
    res.send('Email Inválido')
  }

  const emailUser = req.body.email
  const senhaUser = req.body.senha
  
  const data = Usuario.findOne({ where: { usuario_email: id } });
  data.then((data) => {
    const email = data.dataValues.usuario_email     //Pega email no banco de dados
    const password = data.dataValues.usuario_senha  //Pega senha no banco de dados

    if (emailUser === email && senhaUser === password) {
      res.redirect('/agendamento')
    } else {
      res.redirect('/')
    }
  })
})

app.post('/add-horario',(req,res) => {
  Horario.create({
    horario_servico:req.body.servico,
    horario_data:req.body.data,
    horario_hora:req.body.hora
  }).then(() => {
    res.redirect('/')
  }).catch((erro) => {
    res.redirect('/agendamento')
  })
})


console.log('HTTP Server Running')
app.listen(8080)