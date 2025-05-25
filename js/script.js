let vidaGorila = 100;
let humanosRestantes = 100;
let ataques = 0

function log(texto) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${texto}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function resetarJogo(){
    vidaGorila = 100;
    humanosRestantes = 100;
    ataques = 0;
    localStorage.clear();
    log("Novo jogo iniciado.");
}