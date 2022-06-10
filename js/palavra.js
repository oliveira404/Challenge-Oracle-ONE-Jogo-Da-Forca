



var input = document.querySelector(".entrada-palavra");
var btnSalvarComecar = document.querySelector(".btn-salvar-comecar");
var btnCancelar = document.querySelector(".btn-cancelar");

btnSalvarComecar.addEventListener("click", function () {
    //var nomePassado = "";
    //localStorage.setItem("nomePassado", "input.value");

    if (input.value == "") {
        alert("Preencha o campo!")
    } else {
        localStorage.nomePassado = input.value.toUpperCase();
        window.location.href = "jogo-criar-palavra.html";
    }
});


btnCancelar.addEventListener("click", function () {
    window.location.href = "index.html";
});



