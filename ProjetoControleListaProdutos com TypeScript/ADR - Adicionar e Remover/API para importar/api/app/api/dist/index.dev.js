"use strict";

/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

api.dados = function (req, res) {
  res.json([{
    nome: 'mochila',
    montante: 200.5,
    vezes: 2
  }, {
    nome: 'tenis',
    montante: 100.2,
    vezes: 5
  }, {
    nome: 'calça',
    montante: 50.5,
    vezes: 1
  }, {
    nome: 'chinelo',
    montante: 70.5,
    vezes: 2
  }]);
};

module.exports = api;