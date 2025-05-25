let vidaGorila = 100;
let humanosRestantes = 100;
let ataques = 0

function log(texto) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${texto}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function verificaFimJogo() {
    if (vidaGorila <= 0){
        alert("O gorila foi derrotado")
        resetarJogo()
    } else if (humanosRestantes <= 0) {
        alert("Todos os humanos foram derrotados! O gorila venceu!")
        resetarJogo()
    }
}

function resetarJogo(){
    vidaGorila = 100;
    humanosRestantes = 100;
    ataques = 0;
    localStorage.clear();
    log("Novo jogo iniciado.");
}