







var palavras = ["LINUX","ANGULAR","MYSQL","POSTGRES","PYTHON","JAVA", "ALURA", "ORACLE", "RUBY", "SQL", "JAVASCRIPT", "SPRING"];
var tabuleiro = document.querySelector('#forca').getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 0;


var git = document.querySelector(".git");
git.addEventListener("click", function(){
    window.open("https://www.github.com/oliveiradeigor", "_blank");
});

var linke = document.querySelector(".linke");
linke.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/oliveiradeigor", "_blank");
});


var novoJogo = document.querySelector(".btn-novo-jogo");
var desistir = document.querySelector(".btn-desistir");


var novoJogoDentro = document.querySelector(".btn-novo-jogo-dentro");
var desistirDentro = document.querySelector(".btn-desistir-dentro");



novoJogo.addEventListener("click", function () {
    location.reload();

})



desistir.addEventListener("click", function () {
    window.location.href = "index.html";
});


novoJogoDentro.addEventListener("click", function () {
    location.reload();

})



desistirDentro.addEventListener("click", function () {
    window.location.href = "index.html";
});





var forca1 = document.querySelector("#forca1");
var forca2 = document.querySelector("#forca2");
var forca3 = document.querySelector("#forca3");
var forca4 = document.querySelector("#forca4");
var forca5 = document.querySelector("#forca5");
var forca6 = document.querySelector("#forca6");
var forca7 = document.querySelector("#forca7");
var forca8 = document.querySelector("#forca8");
var forca9 = document.querySelector("#forca9");
var forca10 = document.querySelector("#forca10");

function mostrarForca1() {
    forca1.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca2() {
    forca2.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca3() {
    forca3.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca4() {
    forca4.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca5() {
    forca5.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca6() {
    forca6.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca7() {
    forca7.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca8() {
    forca8.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca9() {
    forca9.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}

function mostrarForca10() {
    forca10.classList.remove("desenho-forca");
    const somFundo = new Audio('./song/errou.wav')
    somFundo.play()
}






const somFundo = new Audio('./song/game-cut.mp3')

document.body.addEventListener('click', function () {
    entradaJogo()
})

function entradaJogo() {
    somFundo.muted = false
    somFundo.play()
    somFundo.loop = true;
}



function escolherPalavraSecreta() {
    var palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    //console.log(palavra);
    return palavra;
}

//escolherPalavraSecreta();

function escreverPontilhados() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "white"
    tabuleiro.beginPath();
    var eixo = 600 / palavraSecreta.length;
    for (let i = 0; i < palavraSecreta.length; i++) {
        

        tabuleiro.moveTo(100 + (eixo * i), 140);
        tabuleiro.lineTo(150 + (eixo * i), 140);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

escreverPontilhados(escolherPalavraSecreta());


function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 50px MedievalSharp, cursive';
    //tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "white";
    var eixo = 600 / palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 106 + (eixo * index), 120);
    tabuleiro.stroke();


}

function escreverLetraIncorreta(letra, errorsLeft) {
    tabuleiro.font = 'bold 40px MedievalSharp, cursive';
    //tabuleiro.lineWidth = 15;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "white";
    tabuleiro.fillText(letra, 350 + (40 * (10 - errorsLeft)), 50, 40);
    tabuleiro.stroke();

}

function verificarLetraCorreta(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {

        letras.push(key);
        return false;
    } else {

        letras.push(key.toUpperCase());
        return true;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
/*
    if(palavraCorreta.length == acertos){
        console.log("deu certo");
    }*/
    
}



var containerRelatorio = document.querySelector(".container-relatorio");
var textoVocePerdeu = document.querySelector(".voce-perdeu");

var containerTodosElementos = document.querySelector(".container-todos-elementos");


var textoVoceVenceu = document.querySelector(".voce-venceu");

function adicionarLetraIncorreta(letter) {
    if (palavraSecreta.indexOf(letter) <= 0) {
        erros = erros + 1;
        //console.log(erros)
        if (erros == 1) {
            mostrarForca1();
        }
        if (erros == 2) {
            mostrarForca2();
        }
        if (erros == 3) {
            mostrarForca3();
        }
        if (erros == 4) {
            mostrarForca4();
        }
        if (erros == 5) {
            mostrarForca5();
        }
        if (erros == 6) {
            mostrarForca6();
        }
        if (erros == 7) {
            mostrarForca7();
        }
        if (erros == 8) {
            mostrarForca8();
        }
        if (erros == 9) {
            mostrarForca9();
        }
        if (erros == 10) {
            mostrarForca10();
            const somFundo2 = new Audio('./song/game-over-voice.wav')
            somFundo2.play()
            const somFundo = new Audio('./song/enforcado2.wav')
            somFundo.play()
            containerRelatorio.style.display = "block";
            textoVocePerdeu.style.display = "block";
            containerTodosElementos.style.display = "none";

        }


    } 
}

var arryzin = [];

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    //console.log(letra)
    if (!verificarLetraCorreta(e.key)) {
        if (palavraSecreta.includes(letra)) {
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i);
                    
                    arryzin.push(palavraSecreta[i])
                    const somFundo = new Audio('./song/success.mp3')
                    somFundo.play()
                    
                    
                    if(arryzin.length == palavraSecreta.length){
                        const somFundo = new Audio('./song/vitoria.mp3')
                        somFundo.play()
                        console.log("old");
                        containerRelatorio.style.display = "block";
                        textoVoceVenceu.style.display = "block";
                        containerTodosElementos.style.display = "none";
                    }
                    
                    

                }
                
            }
            
        }
      
        else {
            if (!verificarLetraCorreta(e.key))
                return
            adicionarLetraIncorreta(letra)
            escreverLetraIncorreta(letra, erros)
            
        }
       

    }
    

}



