"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(seletor) {
        this._elemento = $(seletor);
    }
    View.prototype.update = function (model) {
        this._elemento.html(this.template(model));
    };
    return View;
}());
exports.View = View;
