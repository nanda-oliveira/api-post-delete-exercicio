const postModel = require('../models/postModel');
const helper = require('../helpers/helpers');

const obterPostagens = (requisicao, resposta) =>{
  resposta.status(200).json(postModel);
}



const obterIdPost =  (requisicao, resposta) =>{
  const { id } = requisicao.params;
  const post = postModel.find(post => post.id == id);

  resposta.json(post);

}


const obterTituloPost =  (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  const baseDeDados = postModel.find(post => post.titulo == titulo);

  resposta.json(baseDeDados);

}

const criarPostagem = (requisicao, resposta) =>{
const { titulo, conteudo, etiquetas, dataCriacao } = requisicao.body;
    const novaPostagem ={
     //utilizando o helper
     id: helper.obterNovoValor(postModel),
     titulo: titulo,
     conteudo: conteudo,
     etiquetas: etiquetas,
     //utilizando o helper
     dataCriacao: helper.novaData(postModel)
   }

   postModel.push(novaPostagem);

   resposta.status(201).json(novaPostagem);
 }

 const deletarPostagem = (requisicao, resposta) =>{
  const { id } = requisicao.params;

  let postagemFiltradas = postModel.filter(post => {
    return post.id == id;
  })[0];

  const index = postModel.indexOf(postagemFiltradas);
  
  postModel.splice(index, 1)

  resposta.json(postModel)
 }

module.exports ={
  obterPostagens,
  obterIdPost,
  obterTituloPost, 
  criarPostagem,
  deletarPostagem
}