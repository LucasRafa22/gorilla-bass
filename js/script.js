let vidaGorila = 100;
let humanosRestantes = 100;
let ataques = 0

document.addEventListener("DOMContentLoaded", () => {
    carregarEstado();
    atualizarDOM();
    setInterval(humanosAtaque, 3000);

    document.getElementById("btnAtacar").addEventListener("click", atacar);
    document.getElementById("btnDefender").addEventListener("click", defender);
    document.getElementById("btnCurar").addEventListener("click", curar);  
})

function atacar() {
    let vivos = humanosRestantes;
    let mortos = Math.min(5, vivos);
    humanosRestantes -= mortos;
    ataques++;
    log(`Gorila atacou e eliminou ${mortos} humanos.`);
    salvarEstado();
    atualizarDOM();
}

function curar() {
    vidaGorila = Math.min(vidaGorila + 10, 100);
    log("Gorila se curou e recuperou 10 de vida.")
    salvarEstado()
    atualizarDOM()
}

function defender() {
    log("Gorila está defendendo.")
    localStorage.setItem("defendendo", "true")
}

function humanosAtaque() {
    if(humanosRestantes <= 0 || vidaGorila <= 0) return;
    let dano = Math.floor(Math.random() * 10) + 1;
    if(localStorage.getItem("defendendo") == "true"){
        dano = Math.floor(dano/2);
        localStorage.removeItem("defendendo")
    }
    vidaGorila -= dano;

    log(`Humanos atacaram e causaram ${dano} de dano.`);
    salvarEstado();
    atualizarDOM();
}

function log(texto) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p>${texto}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

function atualizarDOM() {
    document.getElementById("vidaGorila").textContent = vidaGorila;
    document.getElementById("humanosRestantes").textContent = humanosRestantes;
    document.getElementById("ataques").textContent = ataques;
    verificaFimJogo();
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

function salvarEstado() {
    localStorage.setItem("vidaGorila", vidaGorila);
    localStorage.setItem("humanosRestantes", humanosRestantes);
    localStorage.setItem("ataques", ataques)
}

function carregarEstado() {
  const vg = localStorage.getItem("vidaGorila");
  const hr = localStorage.getItem("humanosRestantes");
  const a = localStorage.getItem("ataques");
  if (vg) vidaGorila = parseInt(vg);
  if (hr) humanosRestantes = parseInt(hr);
  if (a) ataques = parseInt(a);
}

function resetarJogo(){
    vidaGorila = 100;
    humanosRestantes = 100;
    ataques = 0;
    localStorage.clear();
    atualizarDOM();
    log("Novo jogo iniciado.");
}