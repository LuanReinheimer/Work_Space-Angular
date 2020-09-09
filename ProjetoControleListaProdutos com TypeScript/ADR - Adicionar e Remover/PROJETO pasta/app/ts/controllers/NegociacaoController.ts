import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { domInject } from '../helpers/decorators/index';
//====================================================================================================
export class NegociacaoController {

    // Controller principal da aplicacao.

    // Tipamos os nossos input's, para conseguirmos acessar o .value de cada input
    /* Criamos um decorator que realiza injeção de elementos do DOM com o padrão lazy loading, o seja 
    buscamos os elemetos do DOM no ato de quando eles forem acessados, resumindo funcionaram no momento da iteração do usuario com a aplicacao */
    @domInject('#nome')
    private _inputNome: JQuery;

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // Removemos a busca manual dos elementos
        this._negociacoesView.update(this._negociacoes);// atualiza o elemento do DOM com os dados do template
    }

    adiciona(event: Event) {

        event.preventDefault();
        //====================================================================================================
        // Codigo criado para apenas adicionar produto em dia da semana, excluindo sabado e domingo.
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente adicionar produtos em dias úteis, por favor!');
            return
        }
        //====================================================================================================
        const negociacao = new Negociacao(
            // E por fim fizemos a tipagem dos .values acessados 
            String(this._inputNome.val()),
            new Date(this._inputData.val().replace(/-/g, '/')), // passa para tipop date e trocando tudo que tem - por ,
            parseInt(this._inputQuantidade.val()), // converte para int
            parseFloat(this._inputValor.val())); // converte para float

        this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);// atualiza o elemento do DOM com os dados do template
        
        this._mensagemView.update('Produto adicionado com sucesso!')
    }
    //====================================================================================================
    // Metodo criado para verificar a data passada esta entre dia util ou fim de semana
    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
    //====================================================================================================
    // Metodo criado para botao importar dados
    importarDados() {
        //Para consumirmos a API externa, utilizaremos a API fetch que usa o padrão de projeto Promise
        function isOK(res: Response) {

            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOK(res))
            .then(res => res.json())
            .then((dados: any[]) => {
                dados
                    .map(dado => new Negociacao(dado.nome, new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(err => console.log(err.message));
    }
    //====================================================================================================
    // Metodo criado para botao importar dados
    deletarDados() {
        $('#botao-excluir').click(function () {
            $('input').each(function(e,inp) {
                if ($(inp).is(':checked')) {
                    $(inp).parent().parent().remove();
                    console.log(Negociacao);   
                }
              });
            });
    }
    


}
//====================================================================================================

// Enum de dias da semana
enum DiaDaSemana {

    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
//====================================================================================================