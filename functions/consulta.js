const Usuario = require('./Usuario')









emailUser = req.body.email
  senhaUser = req.body.senha

  const data = Usuario.findOne({ where: { id: id } });
  data.then((data) => {
    let email = data.dataValues.usuario_email
    let password = data.dataValues.usuario_senha

    console.log(email)
    console.log(password)
    console.log(emailUser)
    console.log(senhaUser)
})

