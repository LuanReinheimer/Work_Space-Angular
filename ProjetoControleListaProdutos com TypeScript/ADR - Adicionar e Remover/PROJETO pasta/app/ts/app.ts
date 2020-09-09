import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();


// Usando o JQuery
$('.form').submit(controller.adiciona.bind(controller));
// associar o metodo importa dados ao botao na DOM
$('#botao-importa').click(controller.importarDados.bind(controller));
$('#botao-excluir').click(controller.deletarDados.bind(controller));



/* Usamos o lite-server para os seguintes passos, o Ts compila os arquivos JS, estes novos JS
foram detectados pelo lite-server e assim automaticamente ele recarrega a pagina em um browser
do servidor */

/* Instalamos o módulo concurrently. Ele nos permitirá rodar
os dois scripts que criamos em paralelo nas plataformas Windows, MAC e Linux.
Assim nao precisamos rodar uma a um ex: npm start e npm run server desta madeira sempre que mexer no codigo
usar o (npm start)*/
