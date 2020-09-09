/*Podemos simplificar bastante a importação dos módulos através da estratégia Barrel (barril). 
Nela, um módulo importa e exporta todos os artefatos de uma pasta permitindo assim que apenas o barril seja importado na cláusula from*/

/*O loader utilizado nos obriga a escrever index no final da importação do módulo. 
Projetos em Angular e Ionic que fazem uso do Webpack podem omiti-lo na importação*/

export * from './Negociacao'; 
export * from './Negociacoes';