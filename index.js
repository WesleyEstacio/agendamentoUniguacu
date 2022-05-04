const express = require('express');
const app = express();
const Usuario =require('./functions/Usuario')
const validar = require('./functions/validar')

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
  
  const emailUser = req.body.email    //Pega email digitado pelo usuario
  const senhaUser = req.body.senha    //Pega senha digitado pelo usuario
  const id = req.body.email           // Define o parametro de busca no banco de dados

  const data = Usuario.findOne({ where: { usuario_email: id } });
  data.then((data) => {
    let email = data.dataValues.usuario_email     //Pega email no banco de dados
    let password = data.dataValues.usuario_senha  //Pega senha no banco de dados

    const teste = validar(email,password,emailUser,senhaUser)

    console.log(teste)
  })
  
})

app.listen(8080)