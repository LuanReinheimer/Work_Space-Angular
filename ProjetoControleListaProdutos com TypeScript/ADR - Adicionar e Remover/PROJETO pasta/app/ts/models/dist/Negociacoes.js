"use strict";
/* Classe criada para encapsular o array que vai guardar todas as negociacoes que eu cadastrar,
 e todo acesso deste array sera feito atraves da classe abaixo */
exports.__esModule = true;
exports.Negociacoes = void 0;
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this._negociacoes = []; // Array do tipos Negociacao, importante para nao gravar dados indevidos dentro dele, se nao for deste tipo o TS vai travar
    }
    Negociacoes.prototype.adiciona = function (negociacao) {
        this._negociacoes.push(negociacao);
    };
    Negociacoes.prototype.paraArray = function () {
        return [].concat(this._negociacoes);
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
