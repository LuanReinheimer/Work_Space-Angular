"use strict";
/* TypeScript possui um atalho para declaração de propriedades somente leitura. Para isso, basta usarmos o modificador readonly*/
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(nome, data, quantidade, valor) {
        this.nome = nome;
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this.quantidade * this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return Negociacao;
}());
exports.Negociacao = Negociacao;
