"use strict";
exports.__esModule = true;
exports.domInject = void 0;
function domInject(seletor) {
    return function (target, key) {
        var elemento;
        var getter = function () {
            if (!elemento) {
                console.log("buscando  " + seletor + " para injetar em " + key);
                elemento = $(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
exports.domInject = domInject;
