const { sequelize, Sequelize } = require('../conexao')

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

// Horario.sync()

module.exports = Horario