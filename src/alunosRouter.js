const express = require('express'); 

const Aluno = require('./alunoModel');

const router = express.Router();
router.use(express.json()); 


router.get('/', async (req, res) =>{
    
    const alunos = await Aluno.findAll();
    res.send(alunos); 
});

router.get('/:id', async (req, res) =>{
    const aluno = await Aluno.findByPk(req.params.id);
    res.send(aluno);

});

router.get('/matricula/:matricula', async (req, res) =>{
    const aluno = await Aluno.findOne({where: {
        matricula: req.params.matricula
    }});
    res.send(aluno);

});

router.post('/', async (req, res) =>{         //Salvar
    
    let aluno = await Aluno.build(req.body);

    aluno.pontuacao += 500;
    aluno = await aluno.save();
    res.send(aluno);
});

router.put('/:id', async (req, res) =>{     // Atualizar
   let aluno = await Aluno.findByPk(req.params.id);
   aluno.pontuacao = req.body.pontuacao;

   aluno = await aluno.save(aluno);
   res.send(aluno); 

});



router.delete('/:id', async (req, res) =>{   //delete
    let aluno = await Aluno.findByPk(req.params.id);
    aluno.destroy();
    res.status(204).send();
});


module.exports = router;