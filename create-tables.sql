create table aluno ( 
	id integer auto_increment primary key,
    nome varchar(100),
    matricula varchar(20) unique,
    data_nascimento date,
    pontuacao integer
);

create table atividade (
id integer auto_increment primary key,
aluno_id integer,
nome varchar(100),
disciplina varchar(100),
nota decimal(10,2),
observacao varchar (255),
FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

insert into aluno values
(default, 'Bruno', '2004g9966v', '1986-05-30', 0),
(default, 'Natalia', '2004g1122v', '1986-05-30', 0),
(default, 'Klisman', '2004g5896v', '1986-05-30', 0),
(default, 'Kaline', '2004g5566v', '1986-05-30', 0);


select * from aluno