"use strict";
/*Podemos simplificar bastante a importação dos módulos através da estratégia Barrel (barril).
Nela, um módulo importa e exporta todos os artefatos de uma pasta permitindo assim que apenas o barril seja importado na cláusula from*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
/*O loader utilizado nos obriga a escrever index no final da importação do módulo.
Projetos em Angular e Ionic que fazem uso do Webpack podem omiti-lo na importação*/
__exportStar(require("./Negociacao"), exports);
__exportStar(require("./Negociacoes"), exports);
