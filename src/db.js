const {Sequelize} = require('sequelize'); 

const dbSequelize = new Sequelize('aluno','root','mysql',{
  dialect: 'mysql', host:'localhost'

})

module.exports = dbSequelize