/*Por debaixo dos panos, vamos substituir cada propriedade por um getter. 
Sendo um getter, podemos escrever um bloco de código que ainda assim para o JavaScript
ele será considerado uma propriedade. Nesse bloco de código, só buscaremos o elemento do
DOM quando o getter for acessado pela primeira vez. Novos acessos retornarão o mesmo elemento,
Criamos uma função que será nosso getter, mas como faremos a substituição da propriedade alvo do 
decorator pelo getter que criamos? Faremos isso com auxílio de Object.defineProperty: */

export function domInject(seletor: string) {

    return function(target: any, key: string) {

        let elemento: JQuery;

        const getter = function() {

            if(!elemento) {
                console.log(`buscando  ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }

            return elemento;
        }

       Object.defineProperty(target, key, {
           get: getter
       });
    }
}