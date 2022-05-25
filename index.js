const express = require('express');
const app = express();
const Usuario =require('./services/Usuario')
const Horario =require('./services/Horario')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./src'));

//ROTAS

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/src/index.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname+'/src/cadastro.html');
});

app.get('/agendamento', (req, res) => {
    res.sendFile(__dirname+'/src/agendamento.html');
});

app.get('/sucesso', (req, res) => {
  res.sendFile(__dirname+'/src/sucesso.html');
});

app.get('/error', (req, res) => {
  res.sendFile(__dirname+'/src/error.html');
});





app.post('/validar-usuario',(req,res) => {    //Validação do login

  const id = req.body.email

  
  if(id == '') {          //Verificar campo vazio
    res.redirect('/cadastro')
  }else {
    const emailUser = req.body.email
    const senhaUser = req.body.senha
    
    const data = Usuario.findOne({ where: { usuario_email: id } });
    data.then((data) => {
      const email = data.dataValues.usuario_email     //Pegar email no banco de dados
      const password = data.dataValues.usuario_senha  //Pegar senha no banco de dados
  
      
      if (emailUser === email && senhaUser === password) {    //Verificação do login
        res.redirect('/agendamento')
      } else {
        res.redirect('/error')
      }
    })
  }
})





app.post('/add-usuario',(req,res) => {    //Adicionar usuário no banco de dados
    Usuario.create({
      usuario_nome:req.body.nome,
      usuario_cpf:req.body.cpf,
      usuario_email:req.body.email,
      usuario_senha:req.body.senha
    }).then(() => {
      res.redirect('/')
    }).catch(() => {
      res.redirect('/cadastro')
    })
})





app.post('/add-horario',(req,res) => {    //Adicionar horário no banco de dados
  Horario.create({
    horario_servico:req.body.servico,
    horario_data:req.body.data,
    horario_hora:req.body.hora
  }).then(() => {
    res.redirect('/sucesso')
  }).catch((erro) => {
    res.redirect('/error')
  })
})


console.log('Funcionando')
app.listen(8080)