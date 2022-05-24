const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('NOME DO BANCO', 'postgres', 'SENHA DO BANCO', {
    host: 'localhost',
    dialect:  'postgres' 
});

module.exports= {
    Sequelize:Sequelize,
    sequelize:sequelize
}