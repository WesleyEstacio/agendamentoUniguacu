const Usuario = require('./Usuario')
const user = 'Renan Schuartz'

const project = Usuario.findOne({ where: { usuario_nome: user } });

project
    .then((data) => console.log(data.dataValues))

