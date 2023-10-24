//declaração/criando função tocaSomPom
function tocaSomPom(){
    document .querySelector('#som_tecla_pom') .play();
} 

//chamando/invocando a função TocaSomPom pelo clique do botão
document .querySelector('.tecla_pom').onclick = tocaSomPom;

//referência constante listadeTeclas, buscando todos os botões
const listadeTeclas = document .querySelectorAll('tecla');

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTeclas[0] .onclick = tocaSomPom;

let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTecla[contador] .onclick = tocaSomPom;
}