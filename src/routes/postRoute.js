const express = require('express');
const router = express.Router();
const controller = require('../controller/postController');


/*@route GET postagens
@desc Retornar todas as postagens
@access Public 
@endpoint http://localhost:porta/postagens */

router.get('/postagens', controller.obterPostagens);

/*
@route GET postagens/titulo
@desc Retornar apenas títulos
@access Public 
@endpoint http://localhost:porta/postagens/titulo
*/
router.get('/postagens/titulo', controller.obterTituloPost);

/*
@route GET postagens/:id
@desc Retornar apenas uma única postagem pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/postagens/:id
*/
router.get('/postagens/:id', controller.obterIdPost);

/*
@route POST postagens
@desc Criar uma postagem
@access Public 
@endpoint http://localhost:porta/postagens
*/
router.post('/postagens', controller.criarPostagem);

/*
@route DELETE tarefas
@desc Deletar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
*/
router.delete('/postagens/:id', controller.deletarPostagem)

module.exports = router;