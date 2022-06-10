

var comecarJogar = document.querySelector(".flex-btn-comecar-jogo");
var addPalavra = document.querySelector(".btn-add-palavra");

var git = document.querySelector(".git");
git.addEventListener("click", function(){
    window.open("https://www.github.com/oliveiradeigor", "_blank");
});

var linke = document.querySelector(".linke");
linke.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/oliveiradeigor", "_blank");
});


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












