const { sequelize, Sequelize } = require('./conexao')

const Horario = sequelize.define('horario',{
    horario_servico:{
        type: Sequelize.STRING
    },

    horario_data:{
        type: Sequelize.DATEONLY
    },

    horario_hora:{
        type: Sequelize.TIME
    },
})

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

Usuario.sync()
Horario.sync()