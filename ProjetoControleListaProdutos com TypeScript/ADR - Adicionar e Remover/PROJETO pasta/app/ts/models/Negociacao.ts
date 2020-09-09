/* TypeScript possui um atalho para declaração de propriedades somente leitura. Para isso, basta usarmos o modificador readonly*/


import { Negociacoes } from './Negociacoes'

export class Negociacao {

    constructor(readonly nome: string, readonly data: Date, readonly quantidade: number, readonly valor: number){

    }

    get volume(){

        return this.quantidade * this.valor;
    }
}