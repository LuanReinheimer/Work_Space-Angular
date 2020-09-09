"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NegociacoesView = void 0;
/* Esta classe é que vai ter a apresentação da lista de negociacoes que
criamos, ou seja o templat de como eu quero apresentala
*/
var View_1 = require("./View");
var NegociacoesView = /** @class */ (function (_super) {
    __extends(NegociacoesView, _super);
    function NegociacoesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Apresentação da lista de negociacao.
    NegociacoesView.prototype.template = function (model) {
        return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>NOME PRODUTO</th>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n\n            <tbody>\n\n            " + model.paraArray().map(function (negociacao) {
            return "\n                    <tr>\n                        <td><input type=\"checkbox\"> " + negociacao.nome + "</td>\n                        <td>" + negociacao.data.getDate() + "/" + (negociacao.data.getMonth() + 1) + "/" + negociacao.data.getFullYear() + "</td>\n                        <td>" + negociacao.quantidade + "</td>\n                        <td>" + negociacao.valor + "</td>\n                        <td>" + negociacao.volume + "</td>\n                    </tr>                        \n                ";
        }).join('') + "            \n            </tbody>\n\n            <tfoot>\n            </tfoot>\n        </table>               \n        ";
    };
    return NegociacoesView;
}(View_1.View));
exports.NegociacoesView = NegociacoesView;
