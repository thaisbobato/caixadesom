//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamando/invocando a função TocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referência constante listaDeTeclas, buscando todos os botões
const listaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
listaDeTeclas[0].onclick = TocaSom;

for(let contador = 0;contador < listaDeTeclas.lenght;contador = contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}