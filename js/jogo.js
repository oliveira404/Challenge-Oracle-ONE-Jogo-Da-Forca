







var palavras = ["HTML", "CSS", "JAVASCRIPT", "FLUTTER", "PYTHON"];
var tabuleiro = document.querySelector('#forca').getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 0;

/*
tabuleiro.fillStyle = 'darkgreen';
tabuleiro.fillRect(200,50,350,300);
*/

function escolherPalavraSecreta() {
    var palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra;
}

//escolherPalavraSecreta();

function escreverPontilhados() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "DeepPink"
    tabuleiro.beginPath();
    var eixo = 600 / palavraSecreta.length;
    for (let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + (eixo * i), 640);
        tabuleiro.lineTo(550 + (eixo * i), 640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

escreverPontilhados(escolherPalavraSecreta());


function escreverLetraCorreta(index) {
    tabuleiro.font = 'bold 52px Verdana';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "BLUE";
    var eixo = 600 / palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 505 + (eixo * index), 620);
    tabuleiro.stroke();

}

function escreverLetraIncorreta(letra, errorsLeft) {
    tabuleiro.font = 'bold 40px Verdana';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "DeepPink";
    tabuleiro.fillText(letra, 535 + (40 * (10 - errorsLeft)), 710, 40);

}

function verificarLetraCorreta(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        console.log(key);
        letras.push(key);
        return false;
    } else {
        letras.push(key.toUpperCase());
        return true;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
    if (palavraSecreta.indexOf(letter) <= 0) {
        erros = erros + 1;
        console.log(erros)
    }
}

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
    if (!verificarLetraCorreta(e.key)) {
        if (palavraSecreta.includes(letra)) {
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    escreverLetraCorreta(i);
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