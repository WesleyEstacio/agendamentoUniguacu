const { sequelize, Sequelize } = require('../conexao')
const db = require('../conexao')

const Usuario = sequelize.define('usuarios',{
    usuario_nome:{
        type: Sequelize.STRING
    },

    usuario_cpf:{
        type: Sequelize.STRING
    },

    usuario_email:{
        type: Sequelize.STRING
    },

    usuario_senha:{
        type: Sequelize.STRING
    },
})

//Usuario.sync()

module.exports = Usuario