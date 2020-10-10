/*Id: Integer / Números que serão incrementados a cada criação de um novo post.
Data da criação: Date / Data exata da criação do post.
Título: String / O nome do post.
Conteúdo: String / O conteúdo relacionado ao post.
Etiquetas(Tags): Array / Equitetas relacionadas ao post, por exemplo: "Artigo", "Mulheres na Tecnologia" */


const helper = require('../helpers/helpers');

const tarefa = [
  { 
    id: 1, 
    dataCriacao: helper.novaData(),
    titulo: "Faça parte da nossa rede voluntárias",
    conteudo: " Descrição sobre a {reprograma} e convite para voluntárias",
    etiquetas: [ "mulheres na tecnologia" , "voluntarias", "inscricao"]
    
  },
  { 
    id: 2, 
    dataCriacao: helper.novaData(),
    titulo: "Como sua empresa pode ser mais inclusiva",
    conteudo: "Artigo sobre a inserção de mulheres no mercado e incetivo de diversidade na área da tecnologia",
    etiquetas: [ "mulheres na tecnologia" , "mercado", "diversidade"]
  }
  ]

module.exports = tarefa;