const { sequelize, Sequelize } = require('../conexao')

const Usuario = sequelize.define('usuarios', {
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

module.exports = Usuario