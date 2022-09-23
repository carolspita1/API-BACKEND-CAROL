const express = require('express');
const alunoRouter = require('./alunosRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/alunos', alunoRouter);

app.listen(3000, async() => {

    const resultDb = await database.sync();
    // console.log(resultDb);
    console.log('server started')
}) 