const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('agendamentoUniguacu', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:  'postgres' 
});

module.exports= {
    Sequelize:Sequelize,
    sequelize:sequelize
}