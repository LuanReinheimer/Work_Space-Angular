/* Esta classe é que vai ter a apresentação da lista de negociacoes que 
criamos, ou seja o templat de como eu quero apresentala
*/
import { View } from './View';
import { Negociacoes } from '../models/index';

export class NegociacoesView extends View<Negociacoes> {


    // Apresentação da lista de negociacao.
    template(model: Negociacoes): string { // Onde vai ser definida pela string retornada pelo metodo template

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME PRODUTO</th>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>

            ${model.paraArray().map(negociacao =>
            `
                    <tr>
                        <td><input type="checkbox"> ${negociacao.nome}</td>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                `).join('')}            
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
}