/* Classe criada para encapsular o array que vai guardar todas as negociacoes que eu cadastrar,
 e todo acesso deste array sera feito atraves da classe abaixo */

 import { Negociacao } from './Negociacao'

 export class Negociacoes{

     private _negociacoes: Negociacao [] = []// Array do tipos Negociacao, importante para nao gravar dados indevidos dentro dele, se nao for deste tipo o TS vai travar

     adiciona(negociacao: Negociacao): void{ // nao devolve nada
         this. _negociacoes.push(negociacao)
     }
    

     paraArray(): Negociacao[] {// devolve o tipo array de negociacao

        return [].concat(this._negociacoes);
     }
 }