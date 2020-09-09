"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NegociacaoController = void 0;
var index_1 = require("../views/index");
var index_2 = require("../models/index");
var index_3 = require("../helpers/decorators/index");
//====================================================================================================
var NegociacaoController = /** @class */ (function () {
    function NegociacaoController() {
        this._negociacoes = new index_2.Negociacoes();
        this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
        this._mensagemView = new index_1.MensagemView('#mensagemView');
        // Removemos a busca manual dos elementos
        this._negociacoesView.update(this._negociacoes); // atualiza o elemento do DOM com os dados do template
    }
    NegociacaoController.prototype.adiciona = function (event) {
        event.preventDefault();
        //====================================================================================================
        // Codigo criado para apenas adicionar produto em dia da semana, excluindo sabado e domingo.
        var data = new Date(this._inputData.val().replace(/-/g, ','));
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente adicionar produtos em dias úteis, por favor!');
            return;
        }
        //====================================================================================================
        var negociacao = new index_2.Negociacao(
        // E por fim fizemos a tipagem dos .values acessados 
        String(this._inputNome.val()), new Date(this._inputData.val().replace(/-/g, '/')), // passa para tipop date e trocando tudo que tem - por ,
        parseInt(this._inputQuantidade.val()), // converte para int
        parseFloat(this._inputValor.val())); // converte para float
        this._negociacoes.adiciona(negociacao);
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes); // atualiza o elemento do DOM com os dados do template
        this._mensagemView.update('Produto adicionado com sucesso!');
    };
    //====================================================================================================
    // Metodo criado para verificar a data passada esta entre dia util ou fim de semana
    NegociacaoController.prototype._ehDiaUtil = function (data) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    };
    //====================================================================================================
    // Metodo criado para botao importar dados
    NegociacaoController.prototype.importarDados = function () {
        var _this = this;
        //Para consumirmos a API externa, utilizaremos a API fetch que usa o padrão de projeto Promise
        function isOK(res) {
            if (res.ok) {
                return res;
            }
            else {
                throw new Error(res.statusText);
            }
        }
        fetch('http://localhost:8080/dados')
            .then(function (res) { return isOK(res); })
            .then(function (res) { return res.json(); })
            .then(function (dados) {
            dados
                .map(function (dado) { return new index_2.Negociacao(dado.nome, new Date(), dado.vezes, dado.montante); })
                .forEach(function (negociacao) { return _this._negociacoes.adiciona(negociacao); });
            _this._negociacoesView.update(_this._negociacoes);
        })["catch"](function (err) { return console.log(err.message); });
    };
    //====================================================================================================
    // Metodo criado para botao importar dados
    NegociacaoController.prototype.deletarDados = function () {
        $('#botao-excluir').click(function () {
            $('input').each(function (e, inp) {
                if ($(inp).is(':checked')) {
                    $(inp).parent().parent().remove();
                    console.log(index_2.Negociacao);
                }
            });
        });
    };
    __decorate([
        index_3.domInject('#nome')
    ], NegociacaoController.prototype, "_inputNome");
    __decorate([
        index_3.domInject('#data')
    ], NegociacaoController.prototype, "_inputData");
    __decorate([
        index_3.domInject('#quantidade')
    ], NegociacaoController.prototype, "_inputQuantidade");
    __decorate([
        index_3.domInject('#valor')
    ], NegociacaoController.prototype, "_inputValor");
    return NegociacaoController;
}());
exports.NegociacaoController = NegociacaoController;
//====================================================================================================
// Enum de dias da semana
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
//====================================================================================================
