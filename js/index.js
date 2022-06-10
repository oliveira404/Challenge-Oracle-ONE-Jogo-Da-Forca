

var comecarJogar = document.querySelector(".flex-btn-comecar-jogo");
var addPalavra = document.querySelector(".btn-add-palavra");



const somFundo = new Audio('./song/game.mp3')
const somMoveBtn = new Audio('./song/acertou.wav');
//const vitoria = new Audio('./songs/vitoria.mp3')


document.body.addEventListener('click', function () {
    entradaJogo()
})

function entradaJogo() {
    // inicioJogo.muted = false
    somFundo.play()
    somFundo.loop = true;
}












