const {Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

// create table atividade (
//     id integer auto_increment primary key,
//     aluno_id integer,
//     nome varchar(100),
//     disciplina varchar(100),
//     nota decimal(10,2),
//     observacao varchar (255),
//     FOREIGN KEY (aluno_id) REFERENCES aluno(id)
//     );
    
    
const Atividade = db.define('Atividade',{
     id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     nome:{
        type: DataTypes.STRING(100),
        allowNull: false 
     },
     disciplina: {
        type: DataTypes.STRING(100),
        allowNull:false
     },

     nota: {
        type: DataTypes.DECIMAL(100),
        defaultValue: 0
     },
     data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
     },

     data_correcao: {
        type: DataTypes.DATE,
     },
     observacao: {
        type: DataTypes.TEXT,
        
     }
    },{
      tableName:'atividade'
    });

    module.exports = Atividade;