const Usuario = require('./Usuario')
const id = 3
const nome = 'Wesley Estacio'
const senha = '123123'

const data = Usuario.findOne({ where: { id: id } });

data.then((data) => {
    let name = data.dataValues.usuario_nome
    let password = data.dataValues.usuario_senha

    if(name === nome && password === senha){
        console.log('Deu Boa')
    }else{
        console.log('Nao deu boa')
    }
})

