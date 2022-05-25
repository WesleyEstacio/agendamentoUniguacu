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
})      //Criação das tabelas de horário

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
})      //Criação das tabelas de usuários

Usuario.sync()
Horario.sync()