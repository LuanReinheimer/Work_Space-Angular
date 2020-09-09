export abstract class View<T> { // Classe do type generic
// Classe de onde utilizamos a herança.

     /* Por isso a classe View recebe um construtor, o seletor 
    do elemento do DOM, no qual onde queremos apresentar os dados da lista de negociacoes */
    private _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }
    update(model: T) {

        this._elemento.html(this.template(model));
    }
    abstract template(model: T): string ;
} 