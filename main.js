//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document .querySelector('#som_tecla_pom') .play();
} 

//chamando/invocando a função TocaSomPom pelo clique do botão
document .querySelector(idElementoAudio).onclick = tocaSom;

//referência constante listadeTeclas, buscando todos os botões
const listadeTeclas = document .querySelectorAll('tecla');

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTeclas[0] .onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDetecla [contador] .classList[1];
    listaDeTecla[contador] .onclick = function{

    }
}